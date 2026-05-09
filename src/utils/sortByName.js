function sortToolsByName(tools) {
    if (!Array.isArray(tools)) return [];
    return [...tools].sort((a, b) => a.name.localeCompare(b.name));
}

export default sortToolsByName;