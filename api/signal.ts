import axios from 'axios';
import { CompareSaveRequest, CompareSaveResponse } from 'redux/types/compare';

export const saveSignal = ({ token = '', signals }: CompareSaveRequest): Promise<CompareSaveResponse> => (
	axios({
		method: 'post',
		url: `${process.env.API_GATEWAY}/signals/save-signal`,
		headers: { token },
		data: {
			signals,
		},
	})
);

export const fetchUserSignals = (token: string = '') => (
	axios({
		method: 'get',
		url: `${process.env.API_GATEWAY}/signals/user-signals`,
		headers: { token },
	})
);

export const removeSignal = (_id: string, token: string = '') => (
	axios({
		method: 'delete',
		url: `${process.env.API_GATEWAY}/signals/delete-signal`,
		headers: { token },
		data: {
			_id,
		},
	})
);
