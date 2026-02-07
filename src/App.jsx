import "./styles/variables.css";
import "./App.css";
import Header from "./components/Header.jsx";
import AIComponent from "./components/AIComponent.jsx";
import AI_Tools from "./data/tools.json";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import Footer from "./components/Footer.jsx";


function checkMatch(tool, filter) {
  const lowerFilter = filter.toLowerCase();
  return (
    tool.name.toLowerCase().includes(lowerFilter) ||
    tool.description.toLowerCase().includes(lowerFilter) ||
    tool.categories.some(category => category.toLowerCase().includes(lowerFilter))
  );
}

function App() {
  const { theme } = useTheme();
  const ai_tools = AI_Tools.tools;

  // console.log(ai_tools);

  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />

      <div className="search-container">
        <input 
          type="search" 
          placeholder="Search AI Verse..." 
          className="search-entry"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="ai-view-container-main">
        <div className="ai-view-container">
          {ai_tools.filter((tool) => checkMatch(tool, filter)).map((tool, index) => (
            <AIComponent
              key={index}
              image={theme === "light" ? tool.logo.light : tool.logo.dark}
              name={tool.name}
              url={tool.url}
              description={tool.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
