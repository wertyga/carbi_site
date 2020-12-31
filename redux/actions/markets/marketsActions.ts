import _uniq from 'lodash/uniq';
import { MarketsTypes } from 'redux/types/markets';
import { initialState } from 'redux/reducers/marketsStore/marketsStore';
import { fetchMarketsData } from "api/markets";
import { getApiError } from 'utils/errors';

export const getMarketsDataAction = async (dispatch) => {
	try {
		const { data: { data } } = await fetchMarketsData();
		
		const marketsData = Object.entries(data).reduce((init, [market, marketPairs]) => ({
			...init,
			markets: [...init.markets, market],
			pairs: _uniq([...init.pairs, ...marketPairs]),
		}), {
			markets: [],
			pairs: [],
			totalData: data,
		});
		
		dispatch({
			type: MarketsTypes.SET_MARKETS,
			data: marketsData,
		});
	} catch (e) {
	  dispatch({
		  type: MarketsTypes.SET_MARKETS,
		  data: {
		  	...initialState,
			  error: getApiError(e),
		  },
	  });
	}
};
