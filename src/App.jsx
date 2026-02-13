import "./styles/variables.css";
import "./App.css";
import Header from "./components/Header.jsx";
import AIComponent from "./components/AIComponent.jsx";
import AI_Tools from "./data/tools.json";
import AI_Categories from "./data/categories.json";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import Footer from "./components/Footer.jsx";


function checkMatch(tool, searchFilter) {
  const lowerFilter = searchFilter.toLowerCase();
  return (
    tool.name.toLowerCase().includes(lowerFilter) ||
    tool.description.toLowerCase().includes(lowerFilter) ||
    tool.categories.some(category => category.toLowerCase().includes(lowerFilter))
  );
}

function checkCategory(tool, categoryFilter) {
  const lowerFilter  = categoryFilter.toLowerCase();
  return (
    tool.categories.some(category => category.toLowerCase().includes(lowerFilter))
  );
}

function sortToolsByName(tools) {
  if (!Array.isArray(tools)) return [];
  return [...tools].sort((a, b) => a.name.localeCompare(b.name));
}


function App() {
  const { theme } = useTheme();
  const ai_tools = sortToolsByName(AI_Tools.tools);

  // console.log(ai_tools);
  //console.log(AI_Categories);

  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Header />

      <div className="search-container">
        <input 
          type="search" 
          placeholder="Search AI Verse..." 
          className="search-entry"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />

        <select onChange={(e) => setSelectedCategory(e.target.value)} placeholder="Select a Category">
          <option value="">All Categories</option>
          {
            AI_Categories.map((category) => (
              <option key={category.id} value={category.value}>{category.label}</option>
            ))
          }
        </select>

      </div>

      <div className="ai-view-container-main">
        <div className="ai-view-container">
          {(() => {
            // Step 1: filter tools once
            const filtered_tools = ai_tools
              .filter((tool) => checkMatch(tool, searchFilter))
              .filter((tool) => checkCategory(tool, selectedCategory));

            // Step 2: conditional render
            return filtered_tools.length === 0 ? (
              <div className="no-tools-found">No tools found..</div>
            ) : (
              filtered_tools.map((tool, index) => (
                <AIComponent
                  key={index}
                  image={theme === "light" ? tool.logo.light : tool.logo.dark}
                  name={tool.name}
                  url={tool.url}
                  description={tool.description}
                />
              ))
            );
          })()}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
