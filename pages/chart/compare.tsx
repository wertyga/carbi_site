import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Common/Loader/Loader';
import { getPrices } from 'redux/actions/markets/marketsActions';
import { getApiError } from 'utils/errors';

import { useRouter } from 'next/router';

const INTERVAL_TIME = 3000;

const ChartCompare = () => {
	const interval: React.MutableRefObject<NodeJS.Timer | null> = useRef(null);
	const { prices, cookies } = useSelector(({ pricesStore, cookiesStore }) => ({
		prices: pricesStore,
		cookies: cookiesStore,
	}));
	const router = useRouter();
	const dispatch = useDispatch();
	const [state, setState] = useState({ error: '', pending: false });
	
	const getChosenSymbolsPrice = async (withPending?: boolean) => {
		const { query: { markets, pairs } } = router;
		const chosenMarkets: string[] = (markets as string).split('_');
		const chosenPairs: string[] = (pairs as string).split('_');
		try {
			setState(prev => ({ error: '', pending: withPending }));
			await getPrices({
				markets: chosenMarkets,
				pairs: chosenPairs,
				token: cookies.token,
			}, dispatch);
			
			setState(prev => ({ error: '', pending: false }));
		} catch (e) {
			const error = getApiError(e).message;
			setState(prev => ({ ...prev, pending: false, error }));
			clearInterval(interval.current);
			interval.current = null;
		}
	};
	
	useEffect(() => {
		getChosenSymbolsPrice(true);
		interval.current = setInterval(() => {
			getChosenSymbolsPrice();
		}, INTERVAL_TIME);
		return () => {
			clearInterval(interval.current);
			interval.current = null;
		};
	}, []);
	
	return (
		<div>
			<h1 className="page-head">Chart compare page</h1>
			{state.error && <span className="error">{state.error}</span>}
			{state.pending && <Loader />}
		</div>
	);
};

export default ChartCompare;
