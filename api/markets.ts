import axios from 'axios';
import _uniq from "lodash/uniq";
import { MarketsGetResponse, MarketsState } from 'redux/types/markets';

export const fetchMarketsData = async (token: string): Promise<MarketsState> => {
	const { data: { data } }: MarketsGetResponse = await axios({
		method: 'get',
		url: `${process.env.API_GATEWAY}/data/markets-pairs`,
		headers: {
			token: token || '',
		},
	});
	
	return Object.entries(data).reduce((init, [market, marketPairs]) => ({
		...init,
		pairs: _uniq([...init.pairs, ...marketPairs]),
	}), {
		pairs: [],
		totalData: data,
	});
};

export const fetchPrices = ({ pairs, markets, token }) => (
	axios({
		method: 'get',
		url: `${process.env.API_GATEWAY}/data/prices`,
		headers: {
			token: token || '',
		},
		params: {
			pairs,
			markets,
		},
	})
);
