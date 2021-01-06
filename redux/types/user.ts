export enum UserTypes {
	SET_USER = 'SET_USER',
	SET_USER_ERROR = 'SET_USER_ERROR',
	USER_LOGOUT = 'USER_LOGOUT',
}

export type UserState = {
	token: string,
	first_name: string,
	last_name: string,
	username: string,
	tariff: number,
	error?: string,
} | {};

export type UserAction = {
	type: UserTypes,
	data: Record<keyof UserState, string>,
};

export type UserGetResponse = {
	data: {
		data: {
			token: string,
			first_name: string,
			last_name: string,
			username: string,
			tariff: number,
		},
	},
};
