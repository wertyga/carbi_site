import { UserTypes } from 'redux/types/user';
import { CookiesTypes } from 'redux/types/cookies';
import { fetchUser, signUpUser } from 'api/user';
import { getMarketsDataAction, dropPricesStateAction } from 'redux/actions/markets/marketsActions';
import { setComparesAction, dropComparesAction } from 'redux/actions/compare/compareActions';
import { rootAction } from 'redux/actions/rootAction';
import { getApiError } from 'utils/errors';

export const getUserAction = async () => {
	const { rootState: { cookiesStore: { token } }, dispatch } = rootAction();
	try {
		const { data: { data: { signals, ...userData } } } = await fetchUser(token);
		
		dispatch({
			type: UserTypes.SET_USER,
			data: userData,
		});
		setComparesAction(signals);
	} catch (e) {
		const { message, status} = getApiError(e);
	  dispatch({
		  type: UserTypes.SET_USER_ERROR,
		  data: {
		  	error: message,
		  },
	  });
		
		if (status === 404) throw new Error;
	}
};

export const signUpUserAction = async (password: string) => {
	const { dispatch } = rootAction();
	const { data: { data: { signals, ...userData } } } = await signUpUser(password);
	
	await getMarketsDataAction(userData.token);
	
	setComparesAction(signals);
	dispatch({
		type: UserTypes.SET_USER,
		data: userData,
	});
	dispatch({
		type: CookiesTypes.SET_COOKIE,
		data: {
			name: 'token',
			value: userData.token,
		},
	});
};

export const userLogoutAction = async () => {
	const { dispatch } = rootAction();
	await getMarketsDataAction();
	
	dropComparesAction();
	dropPricesStateAction();
	dispatch({
		type: UserTypes.USER_LOGOUT
	});
	dispatch({
		type: CookiesTypes.REMOVE_COOKIE,
		data: {
			name: 'token',
		},
	});
};
