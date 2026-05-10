function sortByUsageCount(tools, tools_usage) {
    if (!tools_usage || Object.keys(tools_usage).length === 0) {
        return tools;
    }

    // Sort tools based on their usage count in tools_usage (descending)
    return [...tools].sort((a, b) => {
        const usageA = tools_usage[a.id] || 0;
        const usageB = tools_usage[b.id] || 0;
        return usageB - usageA;
    });
}

export default sortByUsageCount;