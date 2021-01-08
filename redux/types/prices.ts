export enum PricesTypes {
	SET_PRICES = 'SET_PRICES',
	DROP_PRICES = 'DROP_PRICES',
}

export type GetPricesRequest = {
	pairs: string[],
	markets: string[],
	token?: string,
};

export type Price = { market: string, price: number };
export type MarketPriceResponse = Record<string, Price[]>;
export type PricesGetResponse = {
	data: {
		data: {
			prices: MarketPriceResponse,
		},
	},
};

export type PricesState = Record<string, Price[]>;
