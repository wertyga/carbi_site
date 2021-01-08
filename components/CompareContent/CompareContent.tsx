import { Chart } from 'components/Chart/Chart';
import { useSelector } from 'react-redux';

import { MarketPriceResponse } from 'redux/types/markets';

import storeSelector from "./storeSelector";
import useStyles from './styles';

type Selector = {
	prices: MarketPriceResponse,
};

const CompareContent = () => {
	const { prices }: Selector = useSelector(storeSelector);
	const styles = useStyles();
	
	return (
		<div className={styles.chartContent}>
			{Object.entries(prices).map(([symbol, value], i) => {
				const chartData = [
					['Market', 'Price'],
					...value.map(({ market, price }) => ([`${market} - ${price}`, price])),
				];
				return (
					<Chart
						key={symbol}
						data={chartData as any}
						title={symbol}
					/>
				);
			})}
		</div>
	);
};

export default CompareContent;
