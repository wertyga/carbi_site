import { CookieAction, CookiesTypes } from 'redux/types/cookies';

export const setCookiesAction = (action: CookieAction, dispatch) => {
	dispatch({
		type: CookiesTypes.SET_COOKIE,
		data: action,
	})
};

export const removeCookeAction = (name: string, dispatch) => {
	dispatch({
		type: CookiesTypes.REMOVE_COOKIE,
		data: {
			name,
		},
	});
};
