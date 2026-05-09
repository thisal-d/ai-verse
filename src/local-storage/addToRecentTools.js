import saveRecentToolsToLocalStorage from "./saveRecentTools.js";
import getRecentToolsFromLocalStorage from "./getRecentTools.js";


function addToRecentTools(tool_id) {
    let recent_tools = getRecentToolsFromLocalStorage();
    recent_tools = recent_tools.filter(recent_tool_id => recent_tool_id !== tool_id)
    recent_tools.unshift(tool_id);
    saveRecentToolsToLocalStorage(recent_tools);
}

export default addToRecentTools;