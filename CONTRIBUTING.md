# Contributing to AI Verse

First off, thanks for taking the time to contribute! 🎉

AI Verse is a community-driven project, and we welcome contributions of all kinds — whether you're adding a new AI tool, fixing a typo, or improving the codebase.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Branch Workflow](#branch-workflow)
- [Adding a New Tool](#-adding-a-new-tool)
- [Modifying an Existing Tool](#️-modifying-an-existing-tool)
- [Removing a Tool](#️-removing-a-tool)
- [Tool Data Reference](#-tool-data-reference)
- [Logo Guidelines](#-logo-guidelines)
- [Commit Message Convention](#-commit-message-convention)
- [Pull Request Process](#-pull-request-process)
- [Development Setup](#-development-setup)
- [Reporting Issues](#-reporting-issues)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please be kind and constructive in all interactions.

---

## Branch Workflow

We use dedicated feature branches to keep contributions organized. **Always branch from and PR into the correct branch** based on what you're doing:

| Action | Branch | Description |
|--------|--------|-------------|
| ➕ Add a new tool | `feature/add-tools` | Adding new AI tools to the directory |
| ✏️ Modify a tool | `feature/modify-tools` | Updating descriptions, logos, URLs, categories, etc. |
| 🗑️ Remove a tool | `feature/remove-tools` | Removing outdated, broken, or duplicate tools |

> **⚠️ Important:** Do not push tool changes directly to `main` or `dev`. Always use the appropriate feature branch listed above.

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

Open `src/data/tools.json` and add a new object at the end of the `tools` array:

```json
{
  "id": <next_available_id>,
  "name": "Tool Name",
  "description": "A brief, clear description of what the tool does.",
  "url": "https://tool-website.com/",
  "categories": ["Category1", "Category2"],
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "pricing": ["Free"],
  "logo": {
    "dark": "ai-tools/logo/png/tool-name.png",
    "light": "ai-tools/logo/png/tool-name.png"
  }
}
```

> **💡 Tip:** Check the existing entries in `tools.json` for style reference. Keep descriptions concise (1 sentence).

### Step 4: Add the Logo

Place the logo file in `public/ai-tools/logo/` (see [Logo Guidelines](#-logo-guidelines) below).

### Step 5: Commit, Push & Open a PR

```bash
git add .
git commit -m "feat: add <tool-name>"
git push origin feature/add-tools
```

Then open a Pull Request targeting `feature/add-tools`.

---

## ✏️ Modifying an Existing Tool

### Step 1: Checkout the Branch

```bash
git checkout feature/modify-tools
```

### Step 2: Edit the Tool

Update the relevant fields in `src/data/tools.json` (description, URL, categories, keywords, pricing, or logo path).

If you're updating a logo, replace the file in `public/ai-tools/logo/` using the **same filename**.

### Step 3: Commit, Push & Open a PR

```bash
git add .
git commit -m "fix: update <tool-name> description"
git push origin feature/modify-tools
```

---

## 🗑️ Removing a Tool

### Step 1: Checkout the Branch

```bash
git checkout feature/remove-tools
```

### Step 2: Remove the Tool

1. Delete the tool's JSON entry from `src/data/tools.json`
2. Delete the tool's logo file(s) from `public/ai-tools/logo/`

### Step 3: Commit, Push & Open a PR

```bash
git add .
git commit -m "chore: remove <tool-name>"
git push origin feature/remove-tools
```

---

## 📖 Tool Data Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `number` | Unique identifier (use the next available number) |
| `name` | `string` | Display name of the tool |
| `description` | `string` | One-sentence summary of the tool |
| `url` | `string` | Official website URL |
| `categories` | `string[]` | One or more categories (see below) |
| `keywords` | `string[]` | Search keywords for discoverability |
| `pricing` | `string[]` | Pricing model(s) |
| `logo.dark` | `string` | Path to logo for dark theme |
| `logo.light` | `string` | Path to logo for light theme |

### Available Categories

| Category | Category |
|----------|----------|
| Text & Writing | Coding & Dev |
| Image Generation | Video & Animation |
| Audio & Voice | Research & Analysis |
| Productivity | Design |
| Marketing | 3D & AR/VR |
| Education & Learning | Automation & Workflows |

> **📝 Note:** If your tool doesn't fit any category, open an issue to suggest a new one.

### Pricing Options

| Value | Meaning |
|-------|---------|
| `Free` | Completely free, no paid tier |
| `Freemium` | Free tier available with paid upgrades |
| `Paid` | Requires a paid subscription |

---

## 🖼️ Logo Guidelines

| Requirement | Details |
|-------------|---------|
| **Location** | `public/ai-tools/logo/` |
| **Formats** | PNG, SVG, WEBP, or JPG |
| **Size** | 256×256px or larger |
| **Aspect Ratio** | Square (1:1) recommended |
| **Naming** | Lowercase, hyphenated (e.g., `tool-name.png`) |

### Dark / Light Theme Variants

If the tool's logo needs separate versions for dark and light backgrounds:

```
tool-name-dark.png   → used on dark theme
tool-name-light.png  → used on light theme
```

If one logo works on both, use the same path for both `dark` and `light` fields.

---

## 💬 Commit Message Convention

We follow a simple convention to keep the git history clean:

| Prefix | Usage | Example |
|--------|-------|---------|
| `feat:` | Adding something new | `feat: add ChatGPT` |
| `fix:` | Fixing or updating something | `fix: update Gemini description` |
| `chore:` | Maintenance / removal | `chore: remove deprecated tool` |
| `docs:` | Documentation changes | `docs: update README` |
| `style:` | CSS / visual changes | `style: fix card alignment` |

---

## 🔀 Pull Request Process

1. **Ensure your PR targets the correct branch** (not `main` or `dev`)
2. **One tool per PR** — keep changes focused
3. **Provide a clear title** — e.g., "feat: add PDP AI"
4. **Fill in the PR description** with:
   - What tool you're adding/modifying/removing
   - Why (if removing or significantly changing a tool)
5. **Verify locally** — run `npm run dev` and confirm the tool appears correctly
6. **Wait for review** — a maintainer will review and merge your PR

### PR Checklist

Before submitting, make sure:

- [ ] Tool entry is valid JSON (no trailing commas, correct syntax)
- [ ] `id` is unique and uses the next available number
- [ ] `url` is a working, valid link
- [ ] Logo file is included and path matches the JSON entry
- [ ] Description is concise (one sentence)
- [ ] At least one category is assigned
- [ ] At least one keyword is provided
- [ ] You've tested locally with `npm run dev`

---

## 🛠️ Development Setup

```bash
# Clone
git clone https://github.com/<your-username>/ai-verse.git
cd ai-verse

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Tech Stack

- **React 18+** — UI framework
- **Vite** — Build tool
- **CSS3** — Styling with dark/light theme support
- **React Toastify** — Notification system

---

## 🐛 Reporting Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/thisal-d/ai-verse/issues) with:

- **Clear title** describing the problem
- **Steps to reproduce** (if it's a bug)
- **Expected vs actual behavior**
- **Screenshots** (if applicable)

---

<div align="center">
  <p><strong>Thank you for helping make AI Verse better! 🚀</strong></p>
</div>
