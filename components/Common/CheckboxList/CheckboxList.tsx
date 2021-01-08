import React from 'react';
import _noop from 'lodash/noop';
import { Checkbox } from '../Checkbox/Checkbox';

import useStyles from './styles';

type ListItem = string | number;
type Props = {
	list: ListItem[],
	chosenItem: (item: ListItem) => boolean,
	disabled?: (item: ListItem) => boolean,
	onChange: (item: ListItem) => () => void,
	label?: (item: ListItem) => string | number,
	listClassName?: string,
	itemClassName?: string,
};

export const CheckboxList: React.FC<Props> = ({
  list,
  chosenItem,
  onChange,
	disabled = _noop,
  listClassName = '',
  itemClassName = '',
  label = _noop,
}) => {
  const styles = useStyles();
  
  const handleClick = item => () => {
  	if (disabled(item)) return;
	  onChange(item)
  };
  return (
    <ul className={`${listClassName}`}>
      {list.map((item) => {
      	const disabledItem = disabled(item);
      	return (
		      <li
			      key={item}
			      className={`${disabledItem ? 'disabled' : ''} ${styles.listItem} ${itemClassName}`}
			      onClick={handleClick(item)}
		      >
			      <Checkbox
				      checked={chosenItem(item)}
				      onChange={onChange(item)}
				      label={label(item)}
				      disabled={disabledItem}
			      />
		      </li>
	      )
      })}
    </ul>
  );
};
