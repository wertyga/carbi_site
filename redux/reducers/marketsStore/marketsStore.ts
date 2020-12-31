import { MarketsState, MarketsTypes } from 'redux/types/markets';

export const initialState = {
	markets: [],
	pairs: [],
	totalData: {},
	error: '',
};

export const marketsStore = (state = initialState, { type, data }): MarketsState => {
	switch(type) {
		case MarketsTypes.SET_MARKETS:
			return data;
		
		default:
			return state;
	}
};
