function saveRecentToolsToLocalStorage(recent_tools) {
    localStorage.setItem("recentTools", JSON.stringify(recent_tools));
}

export default saveRecentToolsToLocalStorage;