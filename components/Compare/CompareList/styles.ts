import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }: Theme) => ({
	compareList: {
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexGrow: 2,
		'& > *': {
			marginBottom: `${spacing(0)}rem`,
		},
	},
}));

export default useStyles;
