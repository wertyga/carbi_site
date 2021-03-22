import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slide from '@material-ui/core/Slide';

import Markets from '../Menus/Markets/Markets';
import PairsMenu from '../Menus/PairsMenu/PairsMenu';

import useStyles from './styles';
import CompareList from "../Compare/CompareList/CompareList";

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

const ChatPageMobileContent: React.FC<Props> = ({
  chosenMarkets,
  handleMarketSelect,
  styles,
  handleChoosePair,
  handleClearPairs,
  handleClearMarkets,
  handleCompare,
	chosenPair,
}) => {
  const [isMarketsOpen, setMarketsOpen] = useState(false);

  const toggleMarketsMenu = () => setMarketsOpen(!isMarketsOpen);
  const handleMobileCompare = () => {
	  setMarketsOpen(false);
	  handleCompare();
  };

  return (
    <div className={styles.chartContentMobile}>
      <PairsMenu
        chosenPair={chosenPair}
        onPairChoose={handleChoosePair}
        handleClear={handleClearPairs}
        className={styles.childMenu}
        headIcon={!!chosenPair && <ArrowForwardIosIcon onClick={toggleMarketsMenu} />}
      />
      <Slide direction="right" in={isMarketsOpen}>
        <div className={styles.mobilePairs}>
          <Markets
            onMarketSelect={handleMarketSelect}
            chosenMarkets={chosenMarkets}
            chosenPair={chosenPair}
            className={styles.childMenu}
            handleClear={handleClearMarkets}
            handleCompare={handleMobileCompare}
            headIcon={<CloseIcon onClick={toggleMarketsMenu} />}
          />
        </div>
      </Slide>
	    <CompareList />
    </div>
  );
};

export default ChatPageMobileContent;
