import { CookieAction, CookiesTypes } from 'redux/types/cookies';
import { rootAction } from '../rootAction';

export const setCookiesAction = (action: CookieAction) => {
	const { dispatch } =  rootAction();
	dispatch({
		type: CookiesTypes.SET_COOKIE,
		data: action,
	})
};

export const removeCookeAction = (name: string) => {
	const { dispatch } =  rootAction();
	dispatch({
		type: CookiesTypes.REMOVE_COOKIE,
		data: {
			name,
		},
	});
};
