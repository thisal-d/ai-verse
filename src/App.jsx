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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToolVerseButton from "./components/ToolVerseButton.jsx";
import getFavouriteToolsFromLocalStorage from "./local-storage/getFavouriteTools.js";
import sortToolsByName from "./utils/SortByName.js";
import checkCategoryFilter from "./utils/categoryFilter.js";
import addFavouriteToolToLocalStorage from "./local-storage/addToFavouriteTools.js";
import removeFavouriteToolFromLocalStorage from "./local-storage/removeFromFavouriteTools.js";
import checkPricingModeFilter from "./utils/pricingFilter.js";
import checkSearchFilter from "./utils/searchFilter.js";
import { toast } from "react-toastify"
import getRecentToolsFromLocalStorage from "./local-storage/getRecentTools.js";
import addToRecentTools from "./local-storage/addToRecentTools.js";
import sortByRecentUsage from "./utils/sortByRecent.js"


let favourite_tools_ids = getFavouriteToolsFromLocalStorage();

function addToFavoriteTools(tool_id, tool_name) {
  favourite_tools_ids.push(tool_id);
  addFavouriteToolToLocalStorage(tool_id);
  toast.success(`${tool_name} added to favourites`);

}

function removeFromFavoriteTools(tool_id, tool_name) {
  favourite_tools_ids = favourite_tools_ids.filter((favourite_tools_id) => favourite_tools_id !== tool_id);
  removeFavouriteToolFromLocalStorage(tool_id);
  toast.info(`${tool_name} removed from favourites`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let recently_viewed_tools_ids = getRecentToolsFromLocalStorage();

function addToRecentlyViewedTool(tool_id) {
  recently_viewed_tools_ids = recently_viewed_tools_ids.filter(recent_tool_id => recent_tool_id != tool_id)
  recently_viewed_tools_ids.unshift(tool_id);
  addToRecentTools(tool_id)
}

function openToolInNewTab(ai_tool) {
  addToRecentlyViewedTool(ai_tool.id);
  window.open(ai_tool.url, '_blank')
}


function App() {
  const { theme } = useTheme();
  const ai_tools = sortToolsByName(AI_Tools.tools);

  // console.log(ai_tools);
  //console.log(AI_Categories);

  const [searchFilter, setSearchFilter] = useState(localStorage.getItem("searchFilter") || "");
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem("selectedCategory") || "");
  const [selectedPricingModes, setselectedPricingModes] = useState(JSON.parse(localStorage.getItem("selectedPricingModes") || "[]"));
  const [favouriteFilter, setFavouriteFilter] = useState(localStorage.getItem("favouriteFilter") === "true");
  const [recentFilter, setRecentFilter] = useState(localStorage.getItem("recentFilter") === "true")

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


      <div className="filters-container">
        <input
          type="search"
          placeholder="Search AI Verse..."
          className="search-entry"
          value={searchFilter}
          onChange={(e) => { setSearchFilter(e.target.value); localStorage.setItem("searchFilter", e.target.value) }}
        />

        <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); localStorage.setItem("selectedCategory", e.target.value) }} placeholder="Select a Category">
          <option value="">All Categories</option>
          {
            AI_Categories.map((category) => (
              <option key={category.id} value={category.value}>{category.label}</option>
            ))
          }
        </select>

        <div className='favourite-btn-filter-container'>
          {
            (favouriteFilter) ? (
              <button onClick={() => { setFavouriteFilter(!favouriteFilter); localStorage.setItem("favouriteFilter", !favouriteFilter) }} className='favourite-btn-filter'>
                <img src={heart_red} alt="heart red" className='favourite-btn-filter-icon' />
              </button>
            ) : (
              <button onClick={() => { setFavouriteFilter(!favouriteFilter); localStorage.setItem("favouriteFilter", !favouriteFilter) }} className='favourite-btn-filter'>
                {theme === "dark" ? <img src={heart_black} alt="heart black" className='favourite-btn-filter-icon' /> :
                  <img src={heart_white} alt="heart white" className='favourite-btn-filter-icon' />}
              </button>
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


      <div className="recent-filter-container">
        <button className={(recentFilter) ? "recent-filter-active" : "recent-filter"} onClick={() => { setRecentFilter(false); localStorage.setItem("recentFilter", false) }}>All Tools</button>
        <button className={(recentFilter) ? "recent-filter" : "recent-filter-active"} onClick={() => { setRecentFilter(true); localStorage.setItem("recentFilter", true) }}>Recent Used Tools</button>
      </div>


      <div className="ai-view-container-main">
        <div className="ai-view-container">
          {(() => {
            // Step 1: filter tools once
            let filtered_tools = ai_tools
              .filter((tool) => checkSearchFilter(tool, searchFilter))
              .filter((tool) => checkCategoryFilter(tool, selectedCategory))
              .filter((tool) => checkPricingModeFilter(tool, selectedPricingModes))
              .filter((tool) => (favouriteFilter) ? (favourite_tools_ids.includes(tool.id)) : (true))
              .filter((tool) => (recentFilter) ? (recently_viewed_tools_ids.includes(tool.id)) : (true));

            if (recentFilter) {
              filtered_tools = sortByRecentUsage(filtered_tools, recently_viewed_tools_ids)
            }

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
                  addToFavorite={addToFavoriteTools}
                  removeFromFavorite={removeFromFavoriteTools}
                  onClickEvent={() => openToolInNewTab(tool)}
                />
              ))
            );
          })()}

        </div>
      </div>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={1000} />

      <ToolVerseButton />
    </>
  );
}

export default App;
