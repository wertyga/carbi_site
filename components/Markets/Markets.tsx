import { NextPage } from 'next';
import { ListItem, List, Card, CardHeader, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { gfMarkets } from 'goldfish/gfMarkets';

import storeSelector from './storeSelector';
import useStyles from './styles';

interface MarketsProps {
	onMarketSelect: Function,
	selectedMarket: string,
}

const Markets: NextPage<MarketsProps> = ({ onMarketSelect, selectedMarket }) => {
	const { markets } = useSelector(storeSelector);
	const styles = useStyles();
	
	const handleMarketSelect = market => () => {
		onMarketSelect(market);
	};
	
	return (
		<Card className={styles.wrapper}>
			<CardHeader
				title={gfMarkets.marketsMenuTitle}
			/>
			{markets.length === 0 &&
				<CircularProgress
					color="secondary"
					className={styles.loading}
				/>
			}
			<List>
				{markets.map(market => (
					<ListItem
						key={market}
						button
						selected={selectedMarket === market}
						onClick={handleMarketSelect(market)}
					>
						{market}
					</ListItem>
				))}
			</List>
		</Card>
	);
};

export default Markets;
