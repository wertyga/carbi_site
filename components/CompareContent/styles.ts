import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
	chartContent: {
		display: 'inline-flex',
		width: '100%',
		justifyContent: 'space-around',
		[breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
}));

export default useStyles;
