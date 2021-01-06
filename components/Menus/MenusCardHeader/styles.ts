import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
	cardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& h5': {
			margin: 0,
		},
	},
}));

export default useStyles;
