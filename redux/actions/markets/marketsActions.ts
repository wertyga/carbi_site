import { MarketsTypes, PricesTypes } from 'redux/types/markets';
import { initialState } from 'redux/reducers/marketsStore/marketsStore';
import { fetchMarketsData, fetchPrices } from "api/markets";
import { getApiError } from 'utils/errors';

import { GetPricesRequest } from 'redux/types/markets';

export const getMarketsDataAction = async (token, dispatch) => {
	try {
		const marketsData = await fetchMarketsData(token);
		
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

export const getPrices = async (fetchData: GetPricesRequest, dispatch) => {
	const { data: { data: { prices } } } = await fetchPrices(fetchData);
	
	dispatch({
		type: PricesTypes.SET_PRICES,
		data: prices,
	});
};
