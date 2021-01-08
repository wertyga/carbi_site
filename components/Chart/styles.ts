import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
	chartCard: {
		[breakpoints.down('xs')]: {
			width: '100%',
			marginBottom: `${spacing(0)}rem`,
		},
	},
}));

export default useStyles;
