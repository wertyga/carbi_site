import { PricesState, PricesTypes } from 'redux/types/prices';

export const initialState = {};

export const pricesStore = (state: PricesState = initialState, { type, data }): PricesState => {
	switch(type) {
		case PricesTypes.SET_PRICES:
			return data;
			
		case PricesTypes.DROP_PRICES:
			return initialState;
		
		default:
			return state;
	}
};
