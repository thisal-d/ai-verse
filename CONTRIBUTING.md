# Contributing to AI Verse

First off, thanks for taking the time to contribute! 🎉

AI Verse is a community-driven directory of AI tools, and we welcome contributions of all kinds — whether you're adding a new AI tool, updating an existing entry, fixing a bug, or improving the UI.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Branch Workflow](#branch-workflow)
- [Adding a New Tool](#-adding-a-new-tool)
- [Modifying an Existing Tool](#️-modifying-an-existing-tool)
- [Removing a Tool](#️-removing-a-tool)
- [Contributing Code or UI Improvements](#-contributing-code-or-ui-improvements)
- [Tool Data Reference](#-tool-data-reference)
- [Logo Guidelines](#-logo-guidelines)
- [Commit Message Convention](#-commit-message-convention)
- [Pull Request Process](#-pull-request-process)
- [Development Setup](#-development-setup)
- [Reporting Issues](#-reporting-issues)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and inclusive environment. Please be kind and constructive in all issues, discussions, and pull requests.

---

## Branch Workflow

We use dedicated branches to keep contributions organized. **Always branch from and open your PR against the appropriate target branch:**

| Action | Target Branch | Description |
|--------|---------------|-------------|
| ➕ Add a new tool | `feature/add-tools` | Adding new AI tools to the directory |
| ✏️ Modify a tool | `feature/modify-tools` | Updating descriptions, logos, URLs, categories, pricing, etc. |
| 🗑️ Remove a tool | `feature/remove-tools` | Removing shut-down, broken, or duplicate tools |
| 🛠️ Code / UI changes | `dev` (or `main` if `dev` is not active) | Bug fixes, features, styling, and documentation |

> **⚠️ Important:** Do not push tool-list changes directly to `main`. Always target the appropriate feature branch listed above.

---

## ➕ Adding a New Tool

### Step 1: Fork & Clone

```bash
git clone https://github.com/<your-username>/ai-verse.git
cd ai-verse
```

### Step 2: Checkout the Branch

```bash
git checkout feature/add-tools
```

### Step 3: Add Your Tool Entry

Open `src/data/tools.json` and append a new object to the end of the `tools` array:

```json
{
  "id": 164,
  "name": "Tool Name",
  "description": "A brief, clear one-sentence description of what the tool does.",
  "url": "https://tool-website.com/",
  "categories": ["Category 1", "Category 2"],
  "keywords": ["keyword 1", "keyword 2", "keyword 3"],
  "pricing": ["Freemium"],
  "logo": {
    "dark": "ai-tools/logo/png/tool-name.png",
    "light": "ai-tools/logo/png/tool-name.png"
  }
}
```

> **💡 Tip:** Check existing entries in `src/data/tools.json` for style reference. Make sure the tool is not already listed, uses its official URL, and has a concise one-sentence description.

### Step 4: Add the Logo

Place the logo file inside the matching format subfolder under `public/ai-tools/logo/` (see [Logo Guidelines](#-logo-guidelines)).

### Step 5: Test, Commit & Open a PR

```bash
npm run dev
```

Confirm the new card renders cleanly in both **light and dark themes** and on **desktop and mobile** viewports, then commit and push:

```bash
git add .
git commit -m "feat: add <tool-name>"
git push origin feature/add-tools
```

Then open a Pull Request targeting `feature/add-tools`.

---

## ✏️ Modifying an Existing Tool

1. Checkout the branch:
   ```bash
   git checkout feature/modify-tools
   ```
2. Update the relevant fields in `src/data/tools.json` (`name`, `description`, `url`, `categories`, `keywords`, `pricing`, or `logo`).
3. If replacing a logo, update the file in `public/ai-tools/logo/<format>/` and remove any unused old logo file.
4. Test locally with `npm run dev`, then commit and push:
   ```bash
   git add .
   git commit -m "fix: update <tool-name> details"
   git push origin feature/modify-tools
   ```
5. Open a Pull Request targeting `feature/modify-tools`.

---

## 🗑️ Removing a Tool

1. Checkout the branch:
   ```bash
   git checkout feature/remove-tools
   ```
2. Delete the tool's JSON object from `src/data/tools.json`.
3. Delete the tool's logo file(s) from `public/ai-tools/logo/<format>/` (make sure no other tool references the same file).
4. Commit, push, and open a PR explaining why the tool is being removed (e.g., shut down, duplicate, or broken):
   ```bash
   git add .
   git commit -m "chore: remove <tool-name>"
   git push origin feature/remove-tools
   ```

---

## 🛠️ Contributing Code or UI Improvements

1. Create a descriptive branch from the latest `main` / `dev`:
   ```bash
   git checkout -b fix/your-fix-name
   ```
2. Follow the existing design tokens in `src/styles/variables.css` (`--color-*`, `--radius-*`, `--font-size-*`, `--content-max`) so changes stay consistent across light and dark themes.
3. Verify both desktop and mobile layouts (`≤ 600px` horizontal cards, `≤ 900px` 2-column, `≤ 1150px` 3-column, `> 1150px` 4-column).
4. Run `npm run build` to confirm there are no build errors before opening a PR.

---

## 📖 Tool Data Reference

### Required Fields

| Field | Type | Rules |
|-------|------|-------|
| `id` | `number` | Unique integer (use the next sequential number) |
| `name` | `string` | Official display name of the tool |
| `description` | `string` | Concise one-sentence summary |
| `url` | `string` | Official, working HTTPS URL |
| `categories` | `string[]` | **1 to 3** categories from the list below |
| `keywords` | `string[]` | Relevant search terms (recommended 10–25 keywords) |
| `pricing` | `string[]` | One or more values from the pricing table below |
| `logo.dark` | `string` | Relative path to logo shown in dark mode |
| `logo.light` | `string` | Relative path to logo shown in light mode |

### Available Categories

| Category | Category |
|----------|----------|
| `Text & Writing` | `Coding & Dev` |
| `Image Generation` | `Video & Animation` |
| `Audio & Voice` | `Research & Analysis` |
| `Productivity` | `Design` |
| `Marketing` | `3D & AR/VR` |
| `Education & Learning` | `Automation & Workflows` |
| `AI Detection & Humanization` | `Translation & Language` |
| `AI Agents` | |

> **📝 Note:** Category names must match `src/data/categories.json` exactly. If you think a new category is needed, open an issue to discuss it first.

### Pricing Options

| Value | Meaning |
|-------|---------|
| `Free` | Completely free with full access and no paid tiers |
| `Freemium` | Free tier available with optional paid upgrades |
| `Paid` | Requires a paid subscription or one-time payment |
| `Open Source` | Source code is freely available (may also offer hosted paid plans) |

---

## 🖼️ Logo Guidelines

| Requirement | Details |
|-------------|---------|
| **Location** | `public/ai-tools/logo/<format>/` (`png`, `svg`, `webp`, or `jpg`) |
| **Formats** | `PNG`, `SVG`, `WEBP`, or `JPG` (`PNG` or `SVG` preferred) |
| **Size** | 256×256px or larger (for raster images) |
| **Aspect Ratio** | Square (`1:1`) recommended |
| **Naming** | Lowercase, hyphenated (e.g., `claude-code.png`) |

### Dark / Light Theme Variants

If a logo has low contrast on either dark or light backgrounds, provide both variants:

```text
public/ai-tools/logo/png/tool-name-dark.png   → used in dark theme
public/ai-tools/logo/png/tool-name-light.png  → used in light theme
```

If one logo works clearly on both themes, use the same path for both `logo.dark` and `logo.light`.

---

## 💬 Commit Message Convention

We follow a simple conventional commit style to keep history readable:

| Prefix | Usage | Example |
|--------|-------|---------|
| `feat:` | Adding a new tool or feature | `feat: add Claude Code` |
| `fix:` | Fixing a bug or updating tool details | `fix: update Gemini URL` |
| `chore:` | Maintenance or tool removal | `chore: remove discontinued tool` |
| `docs:` | Documentation updates | `docs: update CONTRIBUTING.md` |
| `style:` | CSS or layout adjustments | `style: refine mobile card spacing` |

---

## 🔀 Pull Request Process

1. **Target the right branch** (`feature/add-tools`, `feature/modify-tools`, `feature/remove-tools`, or `dev`/`main` for code changes).
2. **Keep PRs focused** — ideally one tool or one logical change per PR.
3. **Write a clear title and description** explaining what changed and why.
4. **Verify locally** with `npm run dev` and `npm run build`.

### PR Checklist

- [ ] `src/data/tools.json` is valid JSON (no trailing commas or syntax errors)
- [ ] Tool is not a duplicate and `id` is unique
- [ ] `url` is official and working
- [ ] Logo file exists in `public/ai-tools/logo/<format>/` and matches `logo.dark` / `logo.light`
- [ ] `categories` contains 1–3 valid values from `src/data/categories.json`
- [ ] `pricing` uses valid values from `src/data/pricing-modes.json`
- [ ] Tested locally in both light and dark themes (desktop & mobile)

---

## 💻 Development Setup

### Prerequisites

- **Node.js** v18+
- **npm**

### Commands

```bash
# Clone your fork
git clone https://github.com/<your-username>/ai-verse.git
cd ai-verse

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool & dev server
- **CSS3** — Custom properties (`src/styles/variables.css`) with light/dark theme support
- **React Toastify** — Toast notifications

---

## 🐛 Reporting Issues

Found a bug, broken tool link, or have a feature idea? [Open an issue](https://github.com/thisal-d/ai-verse/issues) and include:

- **Clear title** summarizing the issue
- **Steps to reproduce** (for bugs)
- **Expected vs. actual behavior**
- **Screenshots** (if applicable)

---

<div align="center">
  <p><strong>Thank you for helping make AI Verse better! 🚀</strong></p>
</div>
