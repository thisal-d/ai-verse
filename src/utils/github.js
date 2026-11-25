import links from "../data/links.json";

const REPO_URL = links["repository-url"] || "https://github.com/thisal-d/ai-verse/";
const match = REPO_URL.match(/github\.com\/([^/]+)\/([^/]+)/i);

export const GITHUB_OWNER = match ? match[1] : "thisal-d";
export const GITHUB_REPO = match ? match[2].replace(/\.git$/, "") : "ai-verse";
export const GITHUB_REPO_URL = REPO_URL;

const CACHE_KEY = `ai-verse:github:${GITHUB_OWNER}/${GITHUB_REPO}`;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

let inFlightPromise = null;

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch {
    // Ignore storage quota or private-mode errors
  }
}

export function formatCount(count) {
  if (typeof count !== "number" || Number.isNaN(count)) return null;
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k`;
  }
  return count.toLocaleString();
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  return response.json();
}

export async function fetchGitHubData() {
  const cached = readCache();
  if (cached) return cached;

  if (inFlightPromise) return inFlightPromise;

  inFlightPromise = (async () => {
    const [repoRes, ownerRes, contributorsRes] = await Promise.allSettled([
      fetchJson(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`),
      fetchJson(`https://api.github.com/users/${GITHUB_OWNER}`),
      fetchJson(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors?per_page=100`
      ),
    ]);

    const repo = repoRes.status === "fulfilled" ? repoRes.value : null;
    const developer = ownerRes.status === "fulfilled" ? ownerRes.value : null;
    const contributors =
      contributorsRes.status === "fulfilled" && Array.isArray(contributorsRes.value)
        ? contributorsRes.value
        : [];

    const data = {
      repo,
      developer,
      contributors,
      error:
        !repo && !developer && contributors.length === 0
          ? "Could not load live GitHub data right now."
          : null,
    };

    if (repo || developer || contributors.length > 0) {
      writeCache(data);
    }

    return data;
  })().finally(() => {
    inFlightPromise = null;
  });

  return inFlightPromise;
}
