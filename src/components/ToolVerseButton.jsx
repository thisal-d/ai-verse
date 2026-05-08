import "../styles/tool-verse-button.css";
import TOOL_VERSE_LOGO from "../assets/tool-verse.png"
import data from "../data/links.json";

const TOOL_VERSE_DEPLOY_URL = data["tool-verse-deploy-url"];

function ToolVerseButton() {
    return (
        <div className="tool-verse">
            <a href={TOOL_VERSE_DEPLOY_URL} target="_blank">
                <img src={TOOL_VERSE_LOGO} alt="Tool Verse" />
                <p>"Looking for Tools? Visit Tool Verse ☺️"</p>
            </a>
        </div>
    )
}

export default ToolVerseButton;