export function saveFavouriteToolsToLocalStorage(tools_id) {
    localStorage.setItem("favouriteTools", JSON.stringify(tools_id));
}


export function removeFavouriteToolFromLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    const updatedFavTools = favTools.filter((favTool) => favTool !== tool_id);
    saveFavouriteToolsToLocalStorage(updatedFavTools);
}


export function getFavouriteToolsFromLocalStorage() {
    const favTools = localStorage.getItem("favouriteTools");
    return favTools ? JSON.parse(favTools) : [];
}


export function addFavouriteToolToLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    favTools.push(tool_id);
    saveFavouriteToolsToLocalStorage(favTools);
}