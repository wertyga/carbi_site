import { NotifyItem } from './notifiers';

export enum CompareTypes {
	ADD_COMPARE_ITEMS = 'ADD_COMPARE_ITEMS',
	REMOVE_COMPARE_ITEM = 'REMOVE_COMPARE_ITEM',
	DROP_COMPARES = 'DROP_COMPARES',
	SET_COMPARES = 'SET_COMPARES',
};

export type CompareItem = {
	symbol: string,
	markets: string[],
	_id: string,
	notifiers: NotifyItem[],
};
export type CompareState = CompareItem[];

export type CompareSaveRequest = {
	token?: string,
	signals: { symbol: string, markets: string[] }[],
};
export type CompareSaveResponse = {
	data: {
		data: CompareItem[],
	},
};
