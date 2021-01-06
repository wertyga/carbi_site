import { CircularProgress } from '@material-ui/core';

import useStyles from './styles';

export const Loader = () => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<CircularProgress />
		</div>
	);
};
