import getFavouriteToolsFromLocalStorage from "./getFavouriteTools";
import saveFavouriteToolsToLocalStorage from "./saveFavouriteTools";


function removeFavouriteToolFromLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    const updatedFavTools = favTools.filter((favTool) => favTool !== tool_id);
    saveFavouriteToolsToLocalStorage(updatedFavTools);
}

export default removeFavouriteToolFromLocalStorage;