
function getFavouriteToolsFromLocalStorage() {
    const favTools = localStorage.getItem("favouriteTools");
    return favTools ? JSON.parse(favTools) : [];
}

export default getFavouriteToolsFromLocalStorage;