import React, { useState, useEffect } from 'react';
import { Card, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CheckboxList } from 'components/Common/CheckboxList/CheckboxList';
import { gfMarkets } from 'goldfish/gfMarkets';

import { useSelector } from 'react-redux';
import storeSelector from './storeSelector';

import PairsMarketsMenuActions from '../../Menus/PairsMarketsMenuActions/PairsMarketsMenuActions';
import { MenusCardHeader } from '../MenusCardHeader/MenusCardHeader';

import useStyles from './styles';

interface PairsMenuProps {
	chosenPair: string,
	onPairChoose: Function,
	handleClear: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	className?: string | Record<string, boolean>,
	headIcon?: React.ReactElement,
}

const PairsMenu: React.FC<PairsMenuProps> = ({
  chosenPair,
  onPairChoose,
  className,
  handleClear,
  headIcon,
}) => {
  const { pairs } = useSelector(storeSelector);
  const [sliceValue, setSlice] = useState(50);
  const [search, setSearch] = useState('');
  const styles = useStyles({ isPairChosen: !!chosenPair });

  const handleChange = (pair) => () => onPairChoose(pair);
  const handleSearch = ({ target: { value } }) => {
  	setSearch(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setSlice(pairs.length);
    }, 200);
  }, []);

  const haveNoPairs = !pairs || pairs.length === 0;
  const searchablePairs = pairs.slice(0, sliceValue).filter(pair => (
	  new RegExp(search, 'i').test(pair)
  ));
  return (
    <Card className={`${styles.wrapper} ${className}`}>
      <MenusCardHeader
        title={gfMarkets.pairsMenuTitle}
        icon={headIcon}
      />
	    <TextField
	      value={search}
	      onChange={handleSearch}
	      placeholder="Search..."
	      className={styles.searchInput}
	      size="small"
	      variant="outlined"
	      InputProps={{
		      startAdornment: (
			      <InputAdornment position="start">
			        <SearchIcon />
			      </InputAdornment>
		      )
	      }}
	    />
      {haveNoPairs && <span>{gfMarkets.noPairs}</span>}
      {!haveNoPairs && (
      <div>
        <CheckboxList
          list={searchablePairs}
          listClassName={styles.pairsMenuList}
          chosenItem={(pair: string) => chosenPair === pair}
          onChange={(pair) => handleChange(pair)}
          label={(pair) => pair}
        />
        <PairsMarketsMenuActions
          withClear={!!chosenPair}
          handleClear={handleClear}
        />
      </div>
      )}
    </Card>
  );
};

export default PairsMenu;
