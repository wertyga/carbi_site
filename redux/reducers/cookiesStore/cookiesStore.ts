import Cookies, { CookieSetOptions } from 'universal-cookie';
import {CookieAction, CookiesTypes} from 'redux/types/cookies';

const MONTH_IN_SECONDS = 2592000;
const defaultOptions = {
	path: '/',
	maxAge: MONTH_IN_SECONDS,
} as CookieSetOptions;

type State = Record<string, string>;

export const cookiesStore = (state: State = {}, { type, data }: CookieAction) => {
	let cookies = new Cookies(state);
	
	switch (type) {
		case CookiesTypes.SET_INITIAL:
			return cookies.getAll();
			
		case CookiesTypes.SET_COOKIE:
			const { name, value, options = defaultOptions } = data;
			cookies.set(name, value, options);
			return cookies.getAll();
			
		case CookiesTypes.REMOVE_COOKIE: {
			cookies.remove(data.name);
			return cookies.getAll();
		}
		
		default:
			return state;
	}
};
