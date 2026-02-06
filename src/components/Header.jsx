import "../styles/header.css";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {

  return (
    <>
	<header>
		<div  className="header">
			<div className="ai-verse">
				<img src="./main.png" alt="logo" className="logo"/>
				<h1>AI Verse</h1>
			</div>
			<ThemeSwitcher />
		</div>
		<div>
			<p className="description"> Welcome to AI Verse, your gateway to the world of artificial intelligence! </p>
		</div>
    </header>
    </>
  )
}

export default Header;
