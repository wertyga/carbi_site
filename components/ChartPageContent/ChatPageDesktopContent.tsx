import React from 'react';
import { Slide } from '@material-ui/core';

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
	chosenPairs: string[],
	markets: string[],
};

const ChatPageDesktopContent: React.FC<Props> = ({
  chosenMarkets,
  handleMarketSelect,
  styles,
  chosenPairs,
  handleChoosePair,
  handleClearPairs,
  handleClearMarkets,
  handleCompare,
  markets,
}) => (
  <>
    <PairsMenu
      chosenPairs={chosenPairs}
      onPairChoose={handleChoosePair}
      handleClear={handleClearPairs}
      className={styles.childMenu}
    />
    <Slide direction="right" in={chosenPairs.length > 1}>
      <div>
        <Markets
          onMarketSelect={handleMarketSelect}
          chosenMarkets={chosenMarkets}
          handleClear={handleClearMarkets}
          handleCompare={handleCompare}
          className={styles.childMenu}
          markets={markets}
        />
      </div>
    </Slide>
  </>
);

export default ChatPageDesktopContent;
