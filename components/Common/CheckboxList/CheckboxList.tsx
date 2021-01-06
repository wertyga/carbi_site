import React from 'react';
import _noop from 'lodash/noop';
import { Checkbox } from '../Checkbox/Checkbox';

import useStyles from './styles';

type ListItem = string | number;
type Props = {
	list: ListItem[],
	chosenItem: (item: ListItem) => boolean,
	onChange: (item: ListItem) => () => void,
	label?: (item: ListItem) => string | number,
	listClassName?: string,
	itemClassName?: string,
};

export const CheckboxList: React.FC<Props> = ({
  list,
  chosenItem,
  onChange,
  listClassName = '',
  itemClassName = '',
  label = _noop,
}) => {
  const styles = useStyles();
  return (
    <ul className={`${listClassName}`}>
      {list.map((item) => (
        <li
          key={item}
          className={`${styles.listItem} ${itemClassName}`}
        >
          <Checkbox
            checked={chosenItem(item)}
            onChange={onChange(item)}
            label={label(item)}
          />
        </li>
      ))}
    </ul>
  );
};
