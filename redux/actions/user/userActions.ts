import { UserTypes } from 'redux/types/user';
import { CookiesTypes } from 'redux/types/cookies';
import { fetchUser, signUpUser } from 'api/user';
import { getApiError } from 'utils/errors';

export const getUserAction = async (token: string, dispatch) => {
	try {
		const { data: { data } } = await fetchUser(token);
		
		dispatch({
			type: UserTypes.SET_USER,
			data,
		});
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

export const signUpUserAction = async (password: string, dispatch) => {
	const { data: { data } } = await signUpUser(password);
	
	dispatch({
		type: UserTypes.SET_USER,
		data,
	});
	dispatch({
		type: CookiesTypes.SET_COOKIE,
		data: {
			name: 'token',
			value: data.token,
		},
	});
};

export const userLogoutAction = (dispatch) => {
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
