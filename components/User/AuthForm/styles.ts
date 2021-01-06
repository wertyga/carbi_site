import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		maxWidth: '30rem',
		marginBottom: `${theme.spacing(2)}rem`,
	},
	input: {
		marginBottom: '2rem',
	},
}));

export default useStyles;
