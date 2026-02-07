import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
        <a href="https://a-i-verse.netlify.app/" target="_blank">
            <div className="app-title-container">
                <img src="main.png" alt="app-logo" className="logo" />

                <p className="app-title">
                    AI Verse
                </p>
            </div>
        </a>
        <p className="developer">
            Developed by{" "}
            <a
            href="https://github.com/thisal-d/"
            target="_blank"
            >
            &copy; Thisal Dilmith
            </a>
        </p>
    </footer>
  );
};

export default Footer;
