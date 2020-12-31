import {useEffect, useState} from "react";
import Markets from "components/Markets/Markets";
import PairsMenu from "components/PairsMenu/PairsMenu";

import { useDispatch, useSelector } from 'react-redux';
import { getMarketsDataAction } from 'redux/actions/markets/marketsActions';

import styles from './styles.module.css';

const ChartPageContent = () => {
	const marketsStore = useSelector(({ marketsStore }) => marketsStore);
	const dispatch = useDispatch();
	const [chosenMarket, chooseMarket] = useState('');
	const [chosenPairs, choosePairs] = useState([]);
	
	const handleMarketSelect = (market: string) => {
		chooseMarket(market);
	};
	
	const handleChoosePair = (pair: string) => {
		const isExist = chosenPairs.includes(pair);
		choosePairs(
			isExist
				? chosenPairs.filter(item => item !== pair)
				: [...chosenPairs, pair]
		)
	};
	
	useEffect(() => {
		if (marketsStore.markets.length > 0) return;
		getMarketsDataAction(dispatch);
	}, []);
	
	console.log(chosenMarket);
	return (
		<div className={styles.root}>
			<Markets
				onMarketSelect={handleMarketSelect}
				selectedMarket={chosenMarket}
			/>
			{!!chosenMarket &&
				<PairsMenu
					chosenMarket={chosenMarket}
					chosenPairs={chosenPairs}
					onPairChoose={handleChoosePair}
				/>
			}
		</div>
	);
};

export default ChartPageContent;
