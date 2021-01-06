import { CookieSetOptions } from 'universal-cookie';

export enum CookiesTypes {
	SET_COOKIE = 'SET_COOKIE',
	SET_INITIAL = 'SET_INITIAL',
	REMOVE_COOKIE = 'REMOVE_COOKIE',
}

export interface CookieAction {
	type: CookiesTypes,
	data: {
		name: string,
		value?: string | number,
		options?: CookieSetOptions,
	},
}
