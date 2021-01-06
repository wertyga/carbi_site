import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
	signUpLink: {
		fontWeight: 600,
		textDecoration: 'underline',
		color: palette.primary[palette.type],
	},
}));

export default useStyles;
