import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '15rem',
		maxHeight: '30rem',
		overflowY: 'auto',
	},
	checkbox: {
		padding: 0,
	},
	pair: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

export default useStyles;
