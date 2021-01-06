import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slide from '@material-ui/core/Slide';

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

const ChatPageMobileContent: React.FC<Props> = ({
  chosenMarkets,
  handleMarketSelect,
  styles,
  chosenPairs,
  handleChoosePair,
  handleClearPairs,
  handleClearMarkets,
  handleCompare,
  markets,
}) => {
  const [isMarketsOpen, setMarketsOpen] = useState(false);

  const toggleMarketsMenu = () => setMarketsOpen(!isMarketsOpen);

  return (
    <div className={styles.chartContentMobile}>
      <PairsMenu
        chosenPairs={chosenPairs}
        onPairChoose={handleChoosePair}
        handleClear={handleClearPairs}
        className={styles.childMenu}
        headIcon={chosenPairs.length > 1 && <ArrowForwardIosIcon onClick={toggleMarketsMenu} />}
        subHeader={chosenPairs.length > 1 && markets.join(', ')}
      />
      <Slide direction="right" in={isMarketsOpen}>
        <div className={styles.mobilePairs}>
          <Markets
            onMarketSelect={handleMarketSelect}
            chosenMarkets={chosenMarkets}
            className={styles.childMenu}
            handleClear={handleClearMarkets}
            handleCompare={handleCompare}
            markets={markets}
            headIcon={<CloseIcon onClick={toggleMarketsMenu} />}
          />
        </div>
      </Slide>
    </div>
  );
};

export default ChatPageMobileContent;
