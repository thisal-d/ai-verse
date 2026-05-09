import getFavouriteToolsFromLocalStorage from "./getFavouriteTools";
import saveFavouriteToolsToLocalStorage from "./saveFavouriteTools";


function addFavouriteToolToLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    favTools.push(tool_id);
    saveFavouriteToolsToLocalStorage(favTools);
}

export default addFavouriteToolToLocalStorage;