import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
	notify: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	submitBtn: {
		marginTop: `${spacing(0)}rem`,
		display: 'flex',
		justifyContent: 'flex-end',
	},
}));

export default useStyles;
