import React from 'react';
import _noop from 'lodash/noop';
import { Button, CardActions } from '@material-ui/core';

import useStyles from './styles';

type PairsMenuProps = {
	handleClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	withCompare?: boolean,
	withClear?: boolean,
	handleCompare?: Function,
};

const PairsMarketsMenuActions: React.FC<PairsMenuProps> = ({
  handleClear = _noop,
  withCompare,
  withClear,
  handleCompare = _noop,
}) => {
  const styles = useStyles({ compare: withCompare });

  return (
    <CardActions className={styles.pairsAction}>
      {withCompare && (
      <Button
        className={styles.successBtn}
        onClick={handleCompare}
      >
        Compare
      </Button>
      )}
      {withClear && (
      <Button
        className={styles.clearBtn}
        onClick={handleClear}
      >
        Clear
      </Button>
      )}
    </CardActions>
  );
};

export default PairsMarketsMenuActions;
