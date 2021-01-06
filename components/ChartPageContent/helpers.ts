export const getMarketWithChosenPairs = (chosenPairs: string[], totalMarketData: Record<string, string[]>):
		string[] => {
	const markets: Array<keyof typeof totalMarketData> = [];
	
	Object.entries(totalMarketData).forEach(([market, pairs]) => {
		const isPairInMarket = chosenPairs.every(item => pairs.includes(item));
		if (isPairInMarket) markets.push(market);
	});
	
	return markets;
};
