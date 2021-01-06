import { UserAction, UserState, UserTypes } from 'redux/types/user';

export const userStore = (state: UserState = {}, { type, data }: UserAction) => {
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
