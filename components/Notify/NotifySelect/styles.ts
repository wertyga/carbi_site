import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }: Theme) => ({
	notifySelectWrapper: {
		minWidth: '20rem',
		marginTop: `${spacing(1)}rem`,
	},
	notifyLabel: {
		left: `${spacing(1)}rem`,
		top: '-0.1rem',
	},
}));

export default useStyles;
