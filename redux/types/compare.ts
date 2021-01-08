export enum CompareTypes {
	ADD_COMPARE_ITEMS = 'ADD_COMPARE_ITEMS',
	REMOVE_COMPARE_ITEM = 'REMOVE_COMPARE_ITEM',
	DROP_COMPARES = 'DROP_COMPARES',
	SET_COMPARES = 'SET_COMPARES',
};

export type CompareItem = { symbol: string, markets: string[], _id: string };
export type CompareState = CompareItem[];

export type CompareSaveRequest = {
	token?: string,
	signals: CompareItem[],
};
