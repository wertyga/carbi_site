import React, { useMemo } from 'react';
import { NextPage } from 'next';
import { Card } from '@material-ui/core';
import { gfMarkets } from 'goldfish/gfMarkets';

import { CheckboxList } from '../../Common/CheckboxList/CheckboxList';
import PairsMarketsMenuActions from '../PairsMarketsMenuActions/PairsMarketsMenuActions';
import { MenusCardHeader } from '../MenusCardHeader/MenusCardHeader';

import useStyles from './styles';

interface MarketsProps {
	onMarketSelect: Function,
	chosenMarkets: string[],
	markets: string[],
	handleClear: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	handleCompare: Function,
	className?: string | Record<string, boolean>,
	headIcon?: React.ReactElement,
}

const Markets: NextPage<MarketsProps> = ({
  onMarketSelect,
  chosenMarkets,
  className,
  handleClear,
  handleCompare,
  headIcon,
  markets,
}) => {
  const styles = useStyles({ isMarketChosen: chosenMarkets.length > 0 });

  const handleMarketSelect = (market) => () => {
    onMarketSelect(market);
  };

  return (
    <Card className={`${styles.wrapper} ${className}`}>
      <MenusCardHeader
        title={gfMarkets.marketsMenuTitle}
        icon={headIcon}
      />
      <div>
        <CheckboxList
          list={markets}
          listClassName={styles.marketsMenuList}
          chosenItem={(market: string) => chosenMarkets.includes(market)}
          onChange={(market) => handleMarketSelect(market)}
          label={(market) => market}
        />
        <PairsMarketsMenuActions
          withClear={chosenMarkets.length > 0 && markets.length > 0}
          handleClear={handleClear}
          handleCompare={handleCompare}
          withCompare={chosenMarkets.length > 1 && markets.length > 1}
        />
      </div>
    </Card>
  );
};

export default Markets;
