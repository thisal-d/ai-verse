import "./styles/variables.css";
import "./App.css";
import Header from "./components/Header.jsx";
import AIComponent from "./components/AIComponent.jsx";
import AI_Tools from "./data/tools.json";
import AI_Categories from "./data/categories.json";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import AI_Pricing_Modes from "./data/pricing-modes.json"
import heart_white from "./assets/heart-light.png"
import heart_black from "./assets/heart-dark.png"
import heart_red from "./assets/heart-red.png"


function checkMatch(tool, searchFilter) {
  const lowerFilter = searchFilter.toLowerCase();

  return (
    tool.name.toLowerCase().includes(lowerFilter) ||
    tool.description.toLowerCase().includes(lowerFilter) ||

    tool.categories.some(category =>
      category.toLowerCase().includes(lowerFilter)
    ) ||
    tool.keywords?.some(keyword =>
      keyword.toLowerCase().includes(lowerFilter)
    )
  );
}

function getFavouriteToolsFromLocalStorage() {
  const favTools = localStorage.getItem("favouriteTools");
  return favTools ? JSON.parse(favTools) : [];
}

function checkCategory(tool, categoryFilter) {
  const lowerFilter = categoryFilter.toLowerCase();
  return (
    tool.categories.some(category => category.toLowerCase().includes(lowerFilter))
  );
}

function sortToolsByName(tools) {
  if (!Array.isArray(tools)) return [];
  return [...tools].sort((a, b) => a.name.localeCompare(b.name));
}



function checkMode(tool, selectedPricingModes) {
  if (selectedPricingModes.length === 0) return true; // no filter applied

  const pricing = tool.pricing;
  if (Array.isArray(pricing)) {
    return pricing.some(mode => selectedPricingModes.includes(mode));
  }
  return selectedPricingModes.includes(pricing);
}


let favourite_tools_ids = getFavouriteToolsFromLocalStorage();

function addFavouriteToolFromArr(tool_id) {
  favourite_tools_ids.push(tool_id);
}

function removeFavouriteToolFromArr(tool_id) {
  favourite_tools_ids = favourite_tools_ids.filter((favourite_tools_id) => favourite_tools_id !== tool_id);
}



function App() {
  const { theme } = useTheme();
  const ai_tools = sortToolsByName(AI_Tools.tools);

  // console.log(ai_tools);
  //console.log(AI_Categories);

  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPricingModes, setselectedPricingModes] = useState([]);
  const [isFavouriteFilter, setIsFavouriteFilter] = useState(false);

  function handleModeChange(e) {
    const { value, checked } = e.target;

    setselectedPricingModes((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((mode) => mode !== value)
    );
  }

  return (
    <>
      <Header />

      <div className="ai-tools-count">
        <p>Total AI Tools: <span>{ai_tools.length}</span></p>
      </div>


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

        <div className='favourite-btn-filter-container'>
          {
            (isFavouriteFilter) ? (
              <button onClick={() => { setIsFavouriteFilter(!isFavouriteFilter) }} className='favourite-btn'><img src={heart_red} alt="heart red" className='favourite-btn-icon' /></button>
            ) : (
              <button onClick={() => { setIsFavouriteFilter(!isFavouriteFilter) }} className='favourite-btn'>{
                theme === "dark" ? <img src={heart_black} alt="heart black" className='favourite-btn-icon' /> : <img src={heart_white} alt="heart white" className='favourite-btn-icon' />
              }</button>
            )
          }
        </div>
      </div>

      <div className="ai-mode-container">
        {AI_Pricing_Modes.map((mode) => (
          <label key={mode.id}>
            <input
              type="checkbox"
              value={mode.name}
              checked={selectedPricingModes.includes(mode.name)}
              onChange={handleModeChange}
            />
            {mode.name}
          </label>
        ))}
      </div>


      <div className="ai-view-container-main">
        <div className="ai-view-container">
          {(() => {
            // Step 1: filter tools once
            const filtered_tools = ai_tools
              .filter((tool) => checkMatch(tool, searchFilter))
              .filter((tool) => checkCategory(tool, selectedCategory))
              .filter((tool) => checkMode(tool, selectedPricingModes))
              .filter((tool) => (isFavouriteFilter) ? (favourite_tools_ids.includes(tool.id)) : (true));

            // Step 2: conditional render
            return filtered_tools.length === 0 ? (
              <div className="no-tools-found"><p>No tools found...</p></div>
            ) : (
              filtered_tools.map((tool, index) => (
                <AIComponent
                  key={tool.id}
                  image={theme === "light" ? tool.logo.light : tool.logo.dark}
                  name={tool.name}
                  id={tool.id}
                  url={tool.url}
                  description={tool.description}
                  isFavourite={favourite_tools_ids.includes(tool.id)}
                  theme={theme}
                  addFavouriteToolFromArr={addFavouriteToolFromArr}
                  removeFavouriteToolFromArr={removeFavouriteToolFromArr}
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
