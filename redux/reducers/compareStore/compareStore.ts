import { CompareState, CompareTypes } from 'redux/types/compare';

export const initialState = [];

export const compareStore = (state: CompareState = initialState, { type, data }): CompareState => {
	switch(type) {
		case CompareTypes.SET_COMPARES:
			return data;
			
		case CompareTypes.ADD_COMPARE_ITEMS:
			return [...state, ...data];
			
		case CompareTypes.REMOVE_COMPARE_ITEM:
			return state.filter(({ _id }) => _id !== data._id);
		
		case CompareTypes.DROP_COMPARES:
			return initialState;
		
		default:
			return state;
	}
};
