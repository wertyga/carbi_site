import { PricesState, PricesTypes } from 'redux/types/markets';

export const initialState = [];

export const pricesStore = (state: PricesState = initialState, { type, data }): PricesState => {
	switch(type) {
		case PricesTypes.SET_PRICES:
			return data;
		
		default:
			return state;
	}
};
