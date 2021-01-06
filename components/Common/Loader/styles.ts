import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
	root: {
		position: 'fixed',
		width: '100vw',
		height: '100vh',
		top: 0,
		left: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, .7)',
		zIndex: 2,
	},
}));

export default useStyles;
