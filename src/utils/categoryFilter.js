function checkCategoryFilter(tool, categoryFilter) {
    const lowerFilter = categoryFilter.toLowerCase();
    return (
        tool.categories.some(category => category.toLowerCase().includes(lowerFilter))
    );
}

export default checkCategoryFilter;