import React from 'react';
import { CardHeader } from '@material-ui/core';

import useStyles from './styles';

type Props = {
	title: string,
	subHeader?: string,
	className?: string,
	icon?: React.ReactElement,
};

export const MenusCardHeader: React.FC<Props> = ({
  title,
  icon,
  className = '',
  subHeader,
}) => {
  const styles = useStyles();
  return (
    <CardHeader
      title={(
        <div className={`${styles.cardHeader} ${className}`}>
          <h5>{title}</h5>
          {icon}
        </div>
  )}
      subheader={subHeader}
    />
  );
};
