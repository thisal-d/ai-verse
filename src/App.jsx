import "./styles/variables.css";
import "./App.css";
import Header from "./components/Header.jsx";
import AIComponent from "./components/AIComponent.jsx";
import AI_Tools from "./data/tools.json";
import AI_Categories from "./data/categories.json";
import { useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import InfoPage from "./components/InfoPage.jsx";
import { fetchGitHubData } from "./utils/github.js";
import AI_Pricing_Modes from "./data/pricing-modes.json"
import heart_white from "./assets/heart-light.png"
import heart_black from "./assets/heart-dark.png"
import heart_red from "./assets/heart-red.png"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToolVerseButton from "./components/ToolVerseButton.jsx";
import sortToolsByName from "./utils/sortByName.js";
import sortByUsageCount from "./utils/sortByUsage.js";
import checkCategoryFilter from "./utils/categoryFilter.js";
import checkPricingModeFilter from "./utils/pricingFilter.js";
import checkSearchFilter from "./utils/searchFilter.js";
import { toast } from "react-toastify"
import sortByRecentUsage from "./utils/sortByRecent.js"
import {
  removeFavouriteToolFromLocalStorage,
  getFavouriteToolsFromLocalStorage,
  addFavouriteToolToLocalStorage
} from "./local-storage/favouriteTools.js";

import {
  getRecentToolsFromLocalStorage,
  addToRecentTools
} from "./local-storage/recentTools.js";
import { getToolUsageFromLocalStorage, saveToolUsageToLocalStorage } from "./local-storage/toolUsage.js";


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
  updateUsageCount(ai_tool.id);
  window.open(ai_tool.url, '_blank');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tool_usage_count = getToolUsageFromLocalStorage();

function updateUsageCount(tool_id) {
  if (tool_usage_count[tool_id] == undefined)
    tool_usage_count[tool_id] = 1
  else
    tool_usage_count[tool_id]++
  console.log(tool_usage_count)
  saveToolUsageToLocalStorage(tool_usage_count)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  const [mostUsedFilter, setMostUsedFilter] = useState(localStorage.getItem("mostUsedFilter") === "true")
  const [activePage, setActivePage] = useState(() =>
    typeof window !== "undefined" && window.location.hash === "#info" ? "info" : "home"
  );
  const [githubData, setGithubData] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchGitHubData()
      .then((data) => {
        if (!cancelled) setGithubData(data);
      })
      .finally(() => {
        if (!cancelled) setGithubLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    function handleHashChange() {
      setActivePage(window.location.hash === "#info" ? "info" : "home");
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function navigateTo(page) {
    setActivePage(page);
    const targetHash = page === "info" ? "#info" : "";
    if (window.location.hash !== targetHash) {
      if (targetHash) {
        window.location.hash = targetHash;
      } else {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleModeChange(e) {
    const { value, checked } = e.target;

    setselectedPricingModes((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((mode) => mode !== value)
    );
  }

  function disableToolFilters() {
    setRecentFilter(false);
    setMostUsedFilter(false);
    localStorage.setItem("recentFilter", false);
    localStorage.setItem("mostUsedFilter", false);
  }

  function saveToolFilterToLocalStorage() {
    localStorage.setItem("recentFilter", recentFilter);
    localStorage.setItem("mostUsedFilter", mostUsedFilter);
  }

  function enableRecentToolFilter() {
    setRecentFilter(true);
    setMostUsedFilter(false);
  }


  function enableMostUsedToolFilter() {
    setMostUsedFilter(true);
    setRecentFilter(false);
  }

  return (
    <>
      <Header
        starCount={githubData?.repo?.stargazers_count}
        activePage={activePage}
        onNavigate={navigateTo}
      >
        <input
          type="search"
          placeholder="Search AI Verse..."
          aria-label="Search AI tools"
          className="search-entry"
          value={searchFilter}
          onChange={(e) => { setSearchFilter(e.target.value); localStorage.setItem("searchFilter", e.target.value) }}
        />
      </Header>

      <main>
      {activePage === "info" ? (
        <InfoPage
          githubData={githubData}
          loading={githubLoading}
          totalTools={ai_tools.length}
          onBack={() => navigateTo("home")}
        />
      ) : (
        <>
      <div className="ai-tools-count">
        <p>Total AI Tools: <span>{ai_tools.length}</span></p>
      </div>

      <div className="filters-main-container">
        <div className="filters-container">
          <select aria-label="Filter by category" value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); localStorage.setItem("selectedCategory", e.target.value) }}>
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
                <button type="button" aria-label="Show all tools instead of favourites only" aria-pressed="true" onClick={() => { setFavouriteFilter(!favouriteFilter); localStorage.setItem("favouriteFilter", !favouriteFilter) }} className='favourite-btn-filter'>
                  <img src={heart_red} alt="" className='favourite-btn-filter-icon' />
                </button>
              ) : (
                <button type="button" aria-label="Show favourite tools only" aria-pressed="false" onClick={() => { setFavouriteFilter(!favouriteFilter); localStorage.setItem("favouriteFilter", !favouriteFilter) }} className='favourite-btn-filter'>
                  {theme === "dark" ? <img src={heart_black} alt="" className='favourite-btn-filter-icon' /> :
                    <img src={heart_white} alt="" className='favourite-btn-filter-icon' />}
                </button>
              )
            }
          </div>
        </div>
      </div >

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


      <div className="tools-filter-container">
        <button className={(!(recentFilter || mostUsedFilter)) ? "filter-active" : "filter"} onClick={disableToolFilters}>All Tools</button>
        <button className={(recentFilter) ? "filter-active" : "filter"} onClick={enableRecentToolFilter}>Recent Used Tools</button>
        <button className={(mostUsedFilter) ? "filter-active" : "filter"} onClick={enableMostUsedToolFilter}>Most Used Tools</button>
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
              .filter((tool) => (recentFilter) ? (recently_viewed_tools_ids.includes(tool.id)) : (true))
              .filter((tool) => (mostUsedFilter) ? (Object.keys(tool_usage_count).map(id_str => Number(id_str)).includes(tool.id)) : (true));

            if (recentFilter)
              filtered_tools = sortByRecentUsage(filtered_tools, recently_viewed_tools_ids)

            if (mostUsedFilter)
              filtered_tools = sortByUsageCount(filtered_tools, tool_usage_count)

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
                  categories={tool.categories}
                  pricing={tool.pricing}
                  selectedCategory={selectedCategory}
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
        </>
      )}

      </main>

      <Footer onOpenInfo={() => navigateTo("info")} />
      <ToastContainer position="bottom-right" autoClose={1000} />

      <ToolVerseButton />
    </>
  );
}

export default App;
