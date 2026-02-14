import { useState, useEffect } from "react";
import "../styles/header.css";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const fullText = "Welcome to AI Verse, your gateway to the world of artificial intelligence !";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
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
  }, []);

  return (
    <header>
      <div className="header">
        <div className="ai-verse">
          <a href="https://a-i-verse.netlify.app/">
            <img src="./main.png" alt="logo" className="logo"/>
          </a>
          
          <a href="https://github.com/thisal-d/ai-verse" target="_blank">
            <h1>AI Verse</h1>
          </a>
        </div>
        <ThemeSwitcher />
      </div>
      <div>
        <p className="description">{displayText}</p>
      </div>
    </header>
  );
}

export default Header;
