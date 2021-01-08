import { NextRouter } from 'next/router';

export const getMarketsAndPairsQuery = (router: NextRouter): { markets: string[], pairs: string[] } => {
	const { query: { markets, pairs } } = router;
	
	return {
		markets: (markets as string).split('_'),
		pairs: (pairs as string).split('_'),
	};
};
