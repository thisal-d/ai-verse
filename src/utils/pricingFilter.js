
function checkPricingModeFilter(tool, selectedPricingModes) {
    if (selectedPricingModes.length === 0) return true; // no filter applied

    const pricing = tool.pricing;
    if (Array.isArray(pricing)) {
        return pricing.some(mode => selectedPricingModes.includes(mode));
    }
    return selectedPricingModes.includes(pricing);
}

export default checkPricingModeFilter;

