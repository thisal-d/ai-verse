import { useState, useEffect } from "react";
import "../styles/header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import data from "../data/links.json";
import { formatCount } from "../utils/github.js";

const REPO_URL = data["repository-url"];

const fullText = "Welcome to AI Verse, your gateway to the world of artificial intelligence !";

// `children` is the search box, rendered inside the sticky header.
function Header({ children, starCount, activePage, onNavigate }) {
  // With reduced motion, show the full sentence immediately instead of typing it out.
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [displayText, setDisplayText] = useState(reduceMotion ? fullText : "");

  useEffect(() => {
    if (reduceMotion) return;

    let index = 0;
    const interval = setInterval(() => {
      // append the next character using slice
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval); // cleanup
  }, [reduceMotion]);

  const formattedStars = formatCount(starCount);
  const isInfoPage = activePage === "info";

  function handleBrandClick(e) {
    e.preventDefault();
    if (isInfoPage && onNavigate) {
      onNavigate("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <header>
        <div className={isInfoPage ? "header header-no-search" : "header"}>
          <div className="ai-verse">
            <a
              href="#home"
              onClick={handleBrandClick}
              aria-label="AI Verse home"
            >
              <img src="main.png" alt="AI Verse logo" className="logo" />
              <h1>AI Verse</h1>
            </a>
          </div>

          {!isInfoPage && <div className="header-search">{children}</div>}

          <div className="header-actions">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="github-star-btn"
              aria-label={
                formattedStars
                  ? `Star AI Verse on GitHub (${formattedStars} stars)`
                  : "Star AI Verse on GitHub"
              }
              title="Star AI Verse on GitHub"
            >
              <svg
                className="github-star-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              <svg
                className="star-glyph"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.5l2.92 5.92 6.53.95-4.72 4.6 1.11 6.51L12 17.4l-5.84 3.08 1.11-6.51-4.72-4.6 6.53-.95L12 2.5z" />
              </svg>
              <span className="github-star-count">
                {formattedStars !== null ? formattedStars : "Star"}
              </span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate?.(isInfoPage ? "home" : "info")}
              className={
                isInfoPage
                  ? "header-info-btn header-info-btn-active"
                  : "header-info-btn"
              }
              aria-label={isInfoPage ? "Back to AI tools" : "More info and contributors"}
              aria-pressed={isInfoPage}
              title={isInfoPage ? "Back to AI tools" : "About, developers & contributors"}
            >
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="header-info-label">Info</span>
            </button>

            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {!isInfoPage && (
        <div className="tagline">
          <p aria-label={fullText}>{displayText}</p>
        </div>
      )}
    </>
  );
}

export default Header;
