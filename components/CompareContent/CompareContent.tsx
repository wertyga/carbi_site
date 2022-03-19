import { Chart } from 'components/Chart/Chart';
import { useSelector } from 'react-redux';
import { PricesFetcher } from 'components/Common/PricesFetcher/PricesFetcher';
import { Notify } from 'components/Notify/Notify';

import { MarketPriceResponse } from 'redux/types/prices';
import { CompareItem } from 'redux/types/compare';

import storeSelector from "./storeSelector";
import useStyles from './styles';

type Selector = {
	prices: MarketPriceResponse,
	compares: CompareItem[],
};

const CompareContent = () => {
	const { prices, compares }: Selector = useSelector(storeSelector);
	const styles = useStyles();
	
	return (
		<>
			<PricesFetcher />
			<div className={styles.compareContent}>
				{compares.map(({ symbol, markets, _id }) => {
					if (!prices[symbol]) return null;
					console.log(markets, prices);
					const chartData = [
						['Market', 'Price'],
						...markets.map(market => {
							const price = prices[symbol][market] || 0;
							return [`${market} - ${price}`, price]
						})
					];
					return (
						<div key={_id}>
							<Chart
								data={chartData as any}
								title={symbol}
							/>
							<Notify
								signalId={_id}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CompareContent;
