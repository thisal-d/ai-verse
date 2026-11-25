import "../styles/info-page.css";
import links from "../data/links.json";
import { GITHUB_OWNER, GITHUB_REPO, formatCount } from "../utils/github.js";

const REPO_URL = links["repository-url"];
const DEVELOPER_PROFILE = links["developer-profile"];

function InfoPage({ githubData, loading, totalTools, onBack }) {
  const repo = githubData?.repo;
  const developer = githubData?.developer;
  const contributors = githubData?.contributors || [];
  const error = githubData?.error;

  const devName = developer?.name || "Thisal Dilmith";
  const devLogin = developer?.login || GITHUB_OWNER;
  const devUrl = developer?.html_url || DEVELOPER_PROFILE;
  const devAvatar =
    developer?.avatar_url || `https://github.com/${GITHUB_OWNER}.png?size=160`;
  const devBio =
    developer?.bio ||
    "Creator and lead developer of AI Verse, building open-source tools for the community.";

  const ownerContributor = contributors.find(
    (c) => c.login?.toLowerCase() === devLogin.toLowerCase()
  );

  return (
    <section className="info-page" aria-labelledby="info-page-title">
      <div className="info-topbar">
        <button type="button" className="info-back-btn" onClick={onBack}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to AI Tools
        </button>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="info-repo-link"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
          {GITHUB_OWNER}/{GITHUB_REPO}
        </a>
      </div>

      {/* Hero / Project Overview */}
      <div className="info-hero">
        <div className="info-hero-brand">
          <img src="main.png" alt="AI Verse logo" className="info-hero-logo" />
          <div>
            <h2 id="info-page-title">About AI Verse</h2>
            <p className="info-hero-desc">
              {repo?.description ||
                "An open-source, community-curated directory of AI tools for writing, coding, images, video, audio, research, and more."}
            </p>
          </div>
        </div>

        <div className="info-stats-grid" aria-label="Repository statistics">
          <div className="info-stat-card">
            <span className="info-stat-label">GitHub Stars</span>
            <strong className="info-stat-value">
              {loading && !repo ? "…" : formatCount(repo?.stargazers_count) ?? "—"}
            </strong>
          </div>
          <div className="info-stat-card">
            <span className="info-stat-label">Forks</span>
            <strong className="info-stat-value">
              {loading && !repo ? "…" : formatCount(repo?.forks_count) ?? "—"}
            </strong>
          </div>
          <div className="info-stat-card">
            <span className="info-stat-label">Contributors</span>
            <strong className="info-stat-value">
              {loading && contributors.length === 0
                ? "…"
                : contributors.length > 0
                ? contributors.length
                : "—"}
            </strong>
          </div>
          <div className="info-stat-card">
            <span className="info-stat-label">Listed AI Tools</span>
            <strong className="info-stat-value">{totalTools}</strong>
          </div>
        </div>
      </div>

      {/* Lead Developer */}
      <div className="info-section">
        <div className="info-section-header">
          <h3>Lead Developer</h3>
          <span className="info-section-pill">Creator</span>
        </div>

        <a
          href={devUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="developer-card"
        >
          <img
            src={devAvatar}
            alt={devName}
            className="developer-avatar"
            loading="lazy"
          />
          <div className="developer-details">
            <div className="developer-name-row">
              <h4>{devName}</h4>
              <span className="developer-handle">@{devLogin}</span>
            </div>
            <p className="developer-bio">{devBio}</p>
            <div className="developer-meta">
              {developer?.location && <span>{developer.location}</span>}
              {ownerContributor && (
                <span>
                  {ownerContributor.contributions}{" "}
                  {ownerContributor.contributions === 1 ? "commit" : "commits"}
                </span>
              )}
              {typeof developer?.public_repos === "number" && (
                <span>{developer.public_repos} public repos</span>
              )}
              <span className="developer-profile-cta">View GitHub Profile →</span>
            </div>
          </div>
        </a>
      </div>

      {/* Contributors */}
      <div className="info-section">
        <div className="info-section-header">
          <h3>Contributors</h3>
          {contributors.length > 0 && (
            <span className="info-section-pill">
              {contributors.length}{" "}
              {contributors.length === 1 ? "person" : "people"}
            </span>
          )}
        </div>

        {loading && contributors.length === 0 ? (
          <div className="contributors-grid" aria-busy="true">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="contributor-card contributor-skeleton">
                <div className="skeleton-avatar" />
                <div className="skeleton-lines">
                  <div className="skeleton-line short" />
                  <div className="skeleton-line tiny" />
                </div>
              </div>
            ))}
          </div>
        ) : contributors.length > 0 ? (
          <ul className="contributors-grid" aria-label="GitHub contributors">
            {contributors.map((contributor) => {
              const isCreator =
                contributor.login?.toLowerCase() === devLogin.toLowerCase();
              return (
                <li key={contributor.id || contributor.login}>
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contributor-card"
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="contributor-avatar"
                      loading="lazy"
                    />
                    <div className="contributor-info">
                      <div className="contributor-name-row">
                        <span className="contributor-login">
                          {contributor.login}
                        </span>
                        {isCreator && (
                          <span className="contributor-role">Creator</span>
                        )}
                      </div>
                      <span className="contributor-commits">
                        {contributor.contributions}{" "}
                        {contributor.contributions === 1
                          ? "contribution"
                          : "contributions"}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="info-empty-state">
            <p>
              {error || "No contributors could be loaded from GitHub right now."}
            </p>
            <a
              href={`${REPO_URL}graphs/contributors`}
              target="_blank"
              rel="noopener noreferrer"
              className="info-secondary-btn"
            >
              View Contributors on GitHub →
            </a>
          </div>
        )}
      </div>

      {/* Contribute CTA */}
      <div className="info-cta-card">
        <div>
          <h3>Want to contribute to AI Verse?</h3>
          <p>
            Add a new AI tool, fix a link, or help improve the directory via a
            pull request on GitHub.
          </p>
        </div>
        <div className="info-cta-actions">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="info-primary-btn"
          >
            ★ Star on GitHub
          </a>
          <a
            href={`${REPO_URL}blob/HEAD/CONTRIBUTING.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="info-secondary-btn"
          >
            Contribution Guide
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoPage;
