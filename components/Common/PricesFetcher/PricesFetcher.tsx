import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { getPricesAction } from 'redux/actions/markets/marketsActions';

import storeSelector  from './storeSelector';

const FETCH_INTERVAL = 3000;

export const PricesFetcher: React.FC = () => {
	const interval: React.MutableRefObject<NodeJS.Timer | null> = useRef(null);
	const { compareStore } = useSelector(storeSelector);
	
	const clearFetchInterval = () => {
		clearInterval(interval.current);
		interval.current = null;
	};
	
	const handleToGetPrices = async () => {
		if (compareStore.length < 1) return;
		const pairs = [];
		const markets = [];
		
		compareStore.forEach(({ symbol, markets: storeMarkets }) => {
			pairs.push(symbol);
			markets.push(...storeMarkets);
		});
		await getPricesAction({ pairs, markets });
	};
	
	useEffect(() => {
		return clearFetchInterval;
	}, []);
	
	useEffect(() => {
		clearFetchInterval();
		handleToGetPrices();
		interval.current = setInterval(() => {
			handleToGetPrices();
		}, FETCH_INTERVAL);
	}, [compareStore.length]);
	
	return null;
};
