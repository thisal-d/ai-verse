<p align="center">
  <a href="https://a-i-verse.netlify.app/">
    <img src="README/main.png" alt="Project Logo" width="200">
  </a>
</p>

<h1 align="center"><a href="">AI Verse</a></h1>

## 📖 Overview

**AI Verse** is a centralized hub built with **React** and **Vite**, designed to help users discover, categorize, and explore the rapidly evolving landscape of Artificial Intelligence. Whether you are looking for LLMs, image generators, or productivity boosters, AI Verse simplifies the search.

## 💻 Tech Stack

* **Framework:** [React 18](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v16.0 or higher)
* npm or yarn

### Installation

1. **Clone the repository:**
```sh
git clone https://github.com/thisal-d/ai-verse.git
cd ai-verse

```


2. **Install dependencies:**
```sh
npm install

```


3. **Launch the development server:**
```sh
npm run dev

```


The app will be available at `http://localhost:5173`.

---

## 🏗️ Project Structure

```text
src/
├── data/tools.json        # The core database of AI tools
└── components/            # React components
public/
└── ai-tools/logo/         # Directory for tool logos (PNG/SVG)

```

---

## 🤝 Contributing

We love community contributions! Adding a new tool is as simple as updating a JSON file.

### How to Add a New AI Tool

#### 1. Add Entry to `tools.json`

Locate `src/data/tools.json` and add a new object to the `tools` array:

```json
{
  "id": 101,
  "name": "Tool Name",
  "description": "Short description of what the tool does.",
  "url": "https://tool-website.com/",
  "categories": ["Productivity", "Writing"],
  "keywords": ["ai", "editor", "copywriting"],
  "pricing": {
    "tiers": ["Free", "Pro"],
    "default": "Free"
  },
  "logo": {
    "dark": "ai-tools/logo/png/tool-name-dark.png",
    "light": "ai-tools/logo/png/tool-name-light.png"
  }
}

```

#### 2. Add Logo Images

Place the logo files in `public/ai-tools/logo/png/` or `public/ai-tools/logo/svg/`.

* **Theme Support:** * **Dual Theme:** If the logo needs different colors for light/dark modes, use the `-dark` and `-light` suffixes.
* **Single Logo:** If one logo works for both, use the same path for both keys in the JSON.



---

## 👥 Contributors


| Contributor                                                                                                 | Profile                                                |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [<img src="https://github.com/thisurika.png?size=25" width="25">](https://github.com/thisurika)         | [Thisurika Hasajith](https://github.com/childeyouyu)                |
| [<img src="https://github.com/senuda-d.png?size=25" width="25">](https://github.com/senuda-d)             | [Senuda Dilvan](https://github.com/Navindu21)       |
| [<img src="https://github.com/fathi-asma.png?size=25" width="25">](https://github.com/fathi-asma)             | [Fathima Asma](https://github.com/fathi-asma)       |


---

<p align="center">Made with ❤️</p>

