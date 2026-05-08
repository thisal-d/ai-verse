import React from "react";
import "../styles/footer.css";
import data from "../data/links.json";

const DEPLOY_URL = data["deploy-url"]
const REPO_URL = data["repository-url"];
const DEVELOPER_PROFILE = data["developer-profile"];

const Footer = () => {
    return (
        <footer>

            <div className="app-title-container">
                <a href={DEPLOY_URL} target="_blank">
                    <img src="main.png" alt="app-logo" className="logo" />
                </a>
                <p className="app-title">
                    <a href={REPO_URL} target="_blank">
                        AI Verse
                    </a>
                </p>
            </div>
            <p className="developer">
                Developed by{" "}
                <a
                    href={DEVELOPER_PROFILE}
                    target="_blank"
                >
                    &copy; Thisal Dilmith
                </a>
            </p>
        </footer >
    );
};

export default Footer;
