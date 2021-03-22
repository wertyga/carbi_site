import { useState} from "react";
import { useSelector } from 'react-redux';
import useMobile from 'hooks/useMobile';
import { getApiError } from 'utils/errors';

import { addCompareAction } from 'redux/actions/compare/compareActions';

import ChartPageMobileContent from './ChartPageMobileContent';
import ChatPageDesktopContent from './ChatPageDesktopContent';

import storeSelector from './storeSelector';

import useStyles from './styles';

const ChartPageContent = () => {
	const styles = useStyles();
	const isMobile = useMobile();
	const { compareStore } = useSelector(storeSelector);
	
	const [chosenMarkets, chooseMarket] = useState([]);
	const [chosenPair, choosePair] = useState('');
	const [error, setError] = useState('');
	
	const handleMarketSelect = (market: string) => {
		const isMarketInList = chosenMarkets.includes(market);
		chooseMarket(
			isMarketInList
			? chosenMarkets.filter(item => item !== market)
			: [...chosenMarkets, market]
		);
		setError('');
	};
	
	const handleChoosePair = (pair: string) => {
		choosePair(chosenPair === pair ? '' : pair);
		chooseMarket([]);
		setError('');
	};
	
	const handleCompare = async () => {
		setError('');
		const existSymbol = compareStore.find(({ symbol }) => symbol === chosenPair);
		if (existSymbol) return;
		try {
			await addCompareAction([{ symbol: chosenPair, markets: chosenMarkets}]);
			chooseMarket([]);
			choosePair('');
		} catch (e) {
		  setError(getApiError(e).message);
		}
	};
	
	const handleClearPairs = () => {
		choosePair('');
		chooseMarket([]);
	};
	const handleClearMarkets = () => chooseMarket([]);
	
	return (
		<div className={styles.root}>
			{error && <span className="error">{error}</span>}
			{isMobile ?
				<ChartPageMobileContent
					chosenPair={chosenPair}
					chosenMarkets={chosenMarkets}
					handleMarketSelect={handleMarketSelect}
					handleChoosePair={handleChoosePair}
					handleClearPairs={handleClearPairs}
					handleClearMarkets={handleClearMarkets}
					handleCompare={handleCompare}
					styles={styles}
				/> :
				<ChatPageDesktopContent
					chosenPair={chosenPair}
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
