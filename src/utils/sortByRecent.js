function sortByRecentUsage(tools, recent_tools_id_order) {
    let sorted_tools = []

    for (let tool_id of recent_tools_id_order) {
        let tool = tools.find((tool) => tool.id == tool_id)
        if (tool != undefined)
            sorted_tools.push(tool)
    }

    return sorted_tools

}

export default sortByRecentUsage;   