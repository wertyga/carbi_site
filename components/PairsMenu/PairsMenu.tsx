import { NextPage } from 'next';
import { ListItem, List, Card, CardHeader, Checkbox } from '@material-ui/core';
import { gfMarkets } from "goldfish/gfMarkets";

import { useSelector } from 'react-redux';
import storeSelector from './storeSelector';

import useStyles from './styles';

interface PairsMenuProps {
	chosenMarket: string,
	chosenPairs: string[],
	onPairChoose: Function,
}

const PairsMenu: NextPage<PairsMenuProps> = ({
	                                             chosenMarket,
	                                             chosenPairs,
	                                             onPairChoose,
                                             }) => {
	const { marketsData } = useSelector(storeSelector);
	const styles = useStyles();
	
	const handleChange = pair => () => onPairChoose(pair);
	
	const marketPairs = marketsData[chosenMarket];
	const haveNoPairs = !marketPairs || marketPairs.length === 0;
	return (
		<Card className={styles.wrapper}>
			<CardHeader
				title={gfMarkets.pairsMenuTitle}
				subheader={chosenMarket}
			/>
			{haveNoPairs && <span>{gfMarkets.noPairs}</span>}
			{!haveNoPairs &&
				<List>
					{marketPairs.map(pair => (
						<ListItem
							key={pair}
							button
							onClick={handleChange(pair)}
							className={styles.pair}
						>
							<span>{pair}</span>
							<Checkbox
								checked={chosenPairs.includes(pair)}
								className={styles.checkbox}
							/>
						</ListItem>
					))}
				</List>
			}
		</Card>
	);
};

export default PairsMenu;
