import React from 'react';

import CompareList from 'components/Compare/CompareList/CompareList';
import Markets from '../Menus/Markets/Markets';
import PairsMenu from '../Menus/PairsMenu/PairsMenu';
import useStyles from './styles';

type Props = {
	chosenMarkets: string[],
	handleMarketSelect: Function,
	handleChoosePair: Function,
	handleCompare: Function,
	handleClearPairs: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	handleClearMarkets: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	styles: ReturnType<typeof useStyles>,
	chosenPair: string,
};

const ChatPageDesktopContent: React.FC<Props> = ({
  chosenMarkets,
  handleMarketSelect,
  styles,
  chosenPair,
  handleChoosePair,
  handleClearPairs,
  handleClearMarkets,
  handleCompare,
}) => {
	return (
		<div className={styles.chartContentDesktop}>
			<div  className={styles.menusWrapper}>
				<PairsMenu
					chosenPair={chosenPair}
					onPairChoose={handleChoosePair}
					handleClear={handleClearPairs}
					className={styles.childMenu}
				/>
				<Markets
					onMarketSelect={handleMarketSelect}
					chosenMarkets={chosenMarkets}
					chosenPair={chosenPair}
					handleClear={handleClearMarkets}
					handleCompare={handleCompare}
					className={styles.childMenu}
				/>
			</div>
			<CompareList />
		</div>
	)
};

export default ChatPageDesktopContent;
