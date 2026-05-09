function getRecentToolsFromLocalStorage() {
    let recent_tools = localStorage.getItem("recentTools");
    if (recent_tools) {
        recent_tools = JSON.parse(recent_tools);
    } else {
        recent_tools = [];
    }
    return recent_tools;
}

export default getRecentToolsFromLocalStorage;