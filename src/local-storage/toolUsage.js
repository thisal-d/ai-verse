export function getToolUsageFromLocalStorage() {
    let tool_usage = localStorage.getItem("toolUsage");
    if (tool_usage) {
        tool_usage = JSON.parse(tool_usage);
    } else {
        tool_usage = {};
    }
    return tool_usage;
}


export function saveToolUsageToLocalStorage(tool_usage) {
    localStorage.setItem("toolUsage", JSON.stringify(tool_usage));
}