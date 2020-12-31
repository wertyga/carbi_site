import axios from 'axios';
import { MarketsGetResponse } from 'redux/types/markets';

export const fetchMarketsData = (): Promise<MarketsGetResponse> => (
	axios({
		method: 'get',
		url: `${process.env.API_GATEWAY}/data/markets-pairs`,
	})
);
