import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';
import { CheckboxList } from 'components/Common/CheckboxList/CheckboxList';
import { gfMarkets } from 'goldfish/gfMarkets';

import { useSelector } from 'react-redux';
import storeSelector from './storeSelector';

import PairsMarketsMenuActions from '../../Menus/PairsMarketsMenuActions/PairsMarketsMenuActions';
import { MenusCardHeader } from '../MenusCardHeader/MenusCardHeader';

import useStyles from './styles';

interface PairsMenuProps {
	chosenPairs: string[],
	subHeader?: string,
	onPairChoose: Function,
	handleClear: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	className?: string | Record<string, boolean>,
	headIcon?: React.ReactElement,
}

const PairsMenu: React.FC<PairsMenuProps> = ({
  chosenPairs,
  onPairChoose,
  className,
  handleClear,
  headIcon,
  subHeader,
}) => {
  const { pairs } = useSelector(storeSelector);
  const [sliceValue, setSlice] = useState(50);
  const styles = useStyles({ isPairChosen: chosenPairs.length > 0 });

  const handleChange = (pair) => () => onPairChoose(pair);

  useEffect(() => {
    setTimeout(() => {
      setSlice(pairs.length);
    }, 200);
  }, []);

  const haveNoPairs = !pairs || pairs.length === 0;
  return (
    <Card className={`${styles.wrapper} ${className}`}>
      <MenusCardHeader
        title={gfMarkets.pairsMenuTitle}
        icon={headIcon}
        subHeader={subHeader}
      />
      {haveNoPairs && <span>{gfMarkets.noPairs}</span>}
      {!haveNoPairs && (
      <div>
        <CheckboxList
          list={pairs.slice(0, sliceValue)}
          listClassName={styles.pairsMenuList}
          chosenItem={(pair: string) => chosenPairs.includes(pair)}
          onChange={(pair) => handleChange(pair)}
          label={(pair) => pair}
        />
        <PairsMarketsMenuActions
          withClear={chosenPairs.length > 0}
          handleClear={handleClear}
        />
      </div>
      )}
    </Card>
  );
};

export default PairsMenu;
