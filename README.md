<a href="">
<p align="center">
  <img src="./public/main.png" alt="Project Logo" width="200">
</p>

<h1 align="center">AI Verse</h1>
</a>

A curated directory of AI tools, built with React and Vite. This project serves as a central hub to discover, categorize, and explore various artificial intelligence tools available in the market.

## 🛠️ Data Source
The data for the tools is stored in `src/data/tools.json`.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.


### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/thisal-d/ai-verse.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```

## 🏗️ Project Structure

*   `src/data/tools.json`: The core database of AI tools.
*   `public/ai-tools/logo`: Directory where tool logos are stored.
*   `src/`: source code for the React application.

Here’s the updated **Contributing** section you can add to your README — it includes your rule for naming **dark/light logos** clearly and fits naturally into the contribution instructions:

---

## 🤝 Contributing

We welcome contributions! If you know of an awesome AI tool that isn't listed, please feel free to add it.

### How to Add a New AI Tool

To add a new tool, you need to modify `src/data/tools.json` and add the corresponding logo images.

#### 1. Add Entry to `tools.json`

Open `src/data/tools.json` and add a new object to the `tools` array. Use the following schema:

```json
{
  "id": 101, // Unique Integer ID
  "name": "Tool Name",
  "description": "Short description of what the tool does.",
  "url": "https://tool-website.com/",
  "categories": [
    "Category1",
    "Category2"
  ],
  "keywords": [
    "keyword1",
    "keyword2"
  ],
  "pricing": {
    "tiers": [
      "Free",
      "Pro"
    ],
    "default": "Free" // "Free", "Paid", or "Freemium"
  },
  "logo": {
    "dark": "ai-tools/logo/png/tool-name-dark.png",
    "light": "ai-tools/logo/png/tool-name-light.png"
  }
}
```

* **id**: Ensure this is a unique integer not already used by another tool.
* **logo**: Paths should be relative to the `public` folder (start with `ai-tools/...`).

#### 2. Add Logo Images

Upload the tool's logo to the `public/ai-tools/logo` directory.

* **Format**: Supported formats are `SVG` and `PNG`.
* **Theme Support**:

  * If your tool needs **different logos** for dark and light themes (for example, white text for dark mode and black text for light mode), name the files with `-dark` and `-light` suffixes.
  * If your logo works for **both themes**, you can upload **one file** (e.g. `tool-name.png`) and reference the same path for both `dark` and `light` in `tools.json`.

**Example Directory Structure:**



**Example JSON (Single Logo Used for Both Themes):**

```
public/
└── ai-tools/
    └── logo/
        └── png/
            └── superai.png
```

```json
"logo": {
  "dark": "ai-tools/logo/png/superai.png",
  "light": "ai-tools/logo/png/superai.png"
}
```

**Example JSON (Separate Dark/Light Logos):**


```
public/
└── ai-tools/
    └── logo/
        └── png/
            ├── superai-dark.png
            └── superai-light.png
```

```json
"logo": {
  "dark": "ai-tools/logo/png/superai-dark.png",
  "light": "ai-tools/logo/png/superai-light.png"
}
```
