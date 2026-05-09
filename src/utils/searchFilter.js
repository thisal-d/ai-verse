
function checkSearchFilter(tool, searchFilter) {
    const lowerFilter = searchFilter.toLowerCase();

    return (
        tool.name.toLowerCase().includes(lowerFilter) ||
        tool.description.toLowerCase().includes(lowerFilter) ||

        tool.categories.some(category =>
            category.toLowerCase().includes(lowerFilter)
        ) ||
        tool.keywords?.some(keyword =>
            keyword.toLowerCase().includes(lowerFilter)
        )
    );
}

export default checkSearchFilter;