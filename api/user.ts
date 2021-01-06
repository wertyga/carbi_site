import axios from 'axios';
import { UserGetResponse } from 'redux/types/user';

const userApi = `${process.env.API_GATEWAY}/user`;

export const fetchUser = async (token: string): Promise<UserGetResponse> => {
	return axios({
		method: 'get',
		url: userApi,
		params: {
			token,
		},
	});
};

export const signUpUser = (password: string): Promise<UserGetResponse> => (
	axios({
		method: 'post',
		url: `${userApi}/sign-in`,
		data: {
			password,
		},
	})
);
