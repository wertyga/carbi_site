import { saveSignal, removeSignal } from 'api/signal';
import { CompareTypes, CompareItem } from 'redux/types/compare';
import { rootAction } from 'redux/actions/rootAction';

export const setComparesAction = (compares: CompareItem[]) => {
	const { dispatch } = rootAction();
	dispatch({
		type: CompareTypes.SET_COMPARES,
		data: compares.map(({ symbol, markets, _id }) => ({ symbol, markets, _id })),
	});
};

export const addCompareAction = async (signals: { symbol: string, markets: string[]}[]) => {
	const { rootState: { userStore: { token } } } = rootAction();

	const { data: { data } } = await saveSignal({ token, signals });
	setComparesAction(data);
};

export const dropComparesAction = () => {
	const { dispatch } = rootAction();
	dispatch({
		type: CompareTypes.DROP_COMPARES,
	});
};

export const removeCompareItemAction = async (_id: string) => {
	const { rootState: { userStore: { token } }, dispatch } = rootAction();
	try {
		
	  await removeSignal(_id, token);
	  
	  dispatch({
		  type: CompareTypes.REMOVE_COMPARE_ITEM,
		  data: {
			  _id,
		  },
	  });
	} catch (e) {
	  console.log(e);
	}
};
