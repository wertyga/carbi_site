import axios from 'axios';
import { NotifiesSaveDataRequest, NotifiesSaveDataResponse } from 'redux/types/notifies';

export const saveNotifyRequest = ({ token = '', ...rest }: NotifiesSaveDataRequest): Promise<NotifiesSaveDataResponse> => (
	axios({
		method: 'post',
		url: `${process.env.API_GATEWAY}/notifies`,
		headers: { token },
		data: rest,
	})
);
