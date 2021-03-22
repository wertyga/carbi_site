import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
	compareContent: {
		display: 'inline-flex',
		flexWrap: 'wrap',
		width: '100%',
		justifyContent: 'space-around',
		'& > *': {
			marginBottom: `${spacing(0)}rem`,
		},
		[breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
}));

export default useStyles;
