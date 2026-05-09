function saveFavouriteToolsToLocalStorage(tools_id) {
    localStorage.setItem("favouriteTools", JSON.stringify(tools_id));
}

export default saveFavouriteToolsToLocalStorage