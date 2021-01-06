import { useMemo, useState} from "react";
import { useRouter } from 'next/router';
import useMobile from 'hooks/useMobile';
import { useDispatch, useSelector } from 'react-redux';

import ChartPageMobileContent from './ChartPageMobileContent';
import ChatPageDesktopContent from './ChatPageDesktopContent';

import useStyles from './styles';
import {getMarketWithChosenPairs} from "./helpers";

const ChartPageContent = () => {
	const marketsStore = useSelector(({ marketsStore }) => marketsStore);
	const styles = useStyles();
	const isMobile = useMobile();
	const router = useRouter();
	
	const dispatch = useDispatch();
	const [chosenMarkets, chooseMarket] = useState([]);
	const [chosenPairs, choosePairs] = useState([]);
	
	const handleMarketSelect = (market: string) => {
		const isMarketInList = chosenMarkets.includes(market);
		chooseMarket(
			isMarketInList
			? chosenMarkets.filter(item => item !== market)
			: [...chosenMarkets, market]
		);
	};
	
	const handleChoosePair = (pair: string) => {
		const isExist = chosenPairs.includes(pair);
		choosePairs(
			isExist
				? chosenPairs.filter(item => item !== pair)
				: [...chosenPairs, pair]
		)
	};
	
	const handleCompare = () => {
		const pairs = chosenPairs.join('_');
		const markets = chosenMarkets.join('_');
		router.push(`/chart/compare?markets=${markets}&pairs=${pairs}`);
	};
	
	const handleClearPairs = () => {
		choosePairs([]);
		chooseMarket([]);
	};
	const handleClearMarkets = () => chooseMarket([]);
	
	const markets = useMemo(() => {
		const availableMarkets = getMarketWithChosenPairs(chosenPairs, marketsStore.totalData);
		chooseMarket(chosenMarkets.filter(market => availableMarkets.includes(market)));
		return availableMarkets;
	}, [chosenPairs.length]);
	
	return (
		<div className={styles.root}>
			{isMobile ?
				<ChartPageMobileContent
					chosenPairs={chosenPairs}
					chosenMarkets={chosenMarkets}
					markets={markets}
					handleMarketSelect={handleMarketSelect}
					handleChoosePair={handleChoosePair}
					handleClearPairs={handleClearPairs}
					handleClearMarkets={handleClearMarkets}
					handleCompare={handleCompare}
					styles={styles}
				/> :
				<ChatPageDesktopContent
					chosenPairs={chosenPairs}
					markets={markets}
					chosenMarkets={chosenMarkets}
					handleMarketSelect={handleMarketSelect}
					handleChoosePair={handleChoosePair}
					handleClearPairs={handleClearPairs}
					handleClearMarkets={handleClearMarkets}
					handleCompare={handleCompare}
					styles={styles}
				/>
			}
			
		</div>
	);
};

export default ChartPageContent;
