import { MarketsTypes } from 'redux/types/markets';
import { PricesTypes } from 'redux/types/prices';
import { initialState } from 'redux/reducers/marketsStore/marketsStore';
import { fetchMarketsData, fetchPrices } from "api/markets";
import { getApiError } from 'utils/errors';

import { rootAction } from '../rootAction';

export const getMarketsDataAction = async (token?: string) => {
	const { dispatch } = rootAction();
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

export const getPricesAction = async (fetchData: { pairs: string[], markets: string[] }) => {
	const { rootState: { userStore: { token } }, dispatch } = rootAction();
	const { data: { data: { prices } } } = await fetchPrices({ ...fetchData, token });
	
	dispatch({
		type: PricesTypes.SET_PRICES,
		data: prices,
	});
};

export const dropPricesStateAction = () => {
	const { dispatch } = rootAction();
	dispatch({
		type: PricesTypes.DROP_PRICES,
	});
};
