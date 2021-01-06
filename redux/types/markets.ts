export enum MarketsTypes {
	SET_MARKETS = 'SET_MARKETS'
}
export enum PricesTypes {
	SET_PRICES = 'SET_PRICES'
}

export type MarketsState = {
	pairs: string[],
	totalData: Record<string, string[]>,
	error?: string,
}

export type GetPricesRequest = {
	pairs: string[],
	markets: string[],
	token?: string,
};

type Price = { symbol: string, prices: { market: string, price: number } };
export type PricesState = Price[];

export type MarketsGetResponse = { data: { data: Record<string, string[]> } };
