export function getRecentToolsFromLocalStorage() {
    let recent_tools = localStorage.getItem("recentTools");
    if (recent_tools) {
        recent_tools = JSON.parse(recent_tools);
    } else {
        recent_tools = [];
    }
    return recent_tools;
}


export function addToRecentTools(tool_id) {
    let recent_tools = getRecentToolsFromLocalStorage();
    recent_tools = recent_tools.filter(recent_tool_id => recent_tool_id !== tool_id)
    recent_tools.unshift(tool_id);
    saveRecentToolsToLocalStorage(recent_tools);
}


export function saveRecentToolsToLocalStorage(recent_tools) {
    localStorage.setItem("recentTools", JSON.stringify(recent_tools));
}