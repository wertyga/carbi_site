import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '10rem',
		minHeight: '20rem',
		position: 'relative',
	},
	loading: {
		position: 'absolute',
		top: 'calc(50% - 20px)',
		left:  'calc(50% - 20px)',
	},
}));

export default useStyles;
