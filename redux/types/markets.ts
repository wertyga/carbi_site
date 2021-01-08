export enum MarketsTypes {
	SET_MARKETS = 'SET_MARKETS'
}

export type MarketsState = {
	pairs: string[],
	totalData: Record<string, string[]>,
	error?: string,
}

export type MarketsGetResponse = { data: { data: Record<string, string[]> } };
