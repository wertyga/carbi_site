import React, { useMemo } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core';
import { gfMarkets } from 'goldfish/gfMarkets';

import { CheckboxList } from '../../Common/CheckboxList/CheckboxList';
import PairsMarketsMenuActions from '../PairsMarketsMenuActions/PairsMarketsMenuActions';
import { MenusCardHeader } from '../MenusCardHeader/MenusCardHeader';

import storeSelector from "./storeSelector";

import { getMarketWithChosenPairs } from "./helpers";
import useStyles from './styles';

interface MarketsProps {
	onMarketSelect: Function,
	chosenMarkets: string[],
	chosenPair: string,
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
	chosenPair,
}) => {
	const { marketsData } = useSelector(storeSelector);
  const styles = useStyles({ isMarketChosen: chosenMarkets.length > 0 });

  const handleMarketSelect = (market) => () => {
    onMarketSelect(market);
  };
	
	const filteredMarkets = useMemo(() => {
		return getMarketWithChosenPairs(chosenPair, marketsData);
	}, [chosenPair]);
	const allMarkets = Object.keys(marketsData);
  return (
    <Card className={`${styles.wrapper} ${className}`}>
      <MenusCardHeader
        title={gfMarkets.marketsMenuTitle}
        icon={headIcon}
      />
      <div>
        <CheckboxList
          list={allMarkets}
          listClassName={styles.marketsMenuList}
          chosenItem={(market: string) => chosenMarkets.includes(market)}
          onChange={(market) => handleMarketSelect(market)}
          label={(market) => market}
          disabled={(market: string) => !filteredMarkets.includes(market)}
        />
        <PairsMarketsMenuActions
          withClear={chosenMarkets.length > 0 && filteredMarkets.length > 0}
          handleClear={handleClear}
          handleCompare={handleCompare}
          withCompare={chosenMarkets.length > 1 && filteredMarkets.length > 1}
        />
      </div>
    </Card>
  );
};

export default Markets;
