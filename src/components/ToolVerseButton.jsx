import "../styles/tool-verse-button.css";
import TOOL_VERSE_LOGO from "../assets/tool-verse.png"

function ToolVerseButton() {
    return (
        <div className="tool-verse">
            <a href="https://tool-verse-ashy.vercel.app/">
                <img src={TOOL_VERSE_LOGO} alt="Tool Verse" />
                <p>Tool Verse</p>
            </a>
        </div>
    )
}

export default ToolVerseButton;