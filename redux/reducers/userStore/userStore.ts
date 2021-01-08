import { UserAction, UserState, UserTypes } from 'redux/types/user';

const initialState = {
	token: '',
	first_name: '',
	last_name: '',
	username: '',
	tariff: 0,
};

export const userStore = (state: UserState = initialState, { type, data }: UserAction) => {
	switch(type) {
		case UserTypes.SET_USER:
			return data;
			
		case UserTypes.SET_USER_ERROR:
			return {
				...state,
				...data,
			}
			
		case UserTypes.USER_LOGOUT:
			return {};
			
		default:
			return state;
	}
};
