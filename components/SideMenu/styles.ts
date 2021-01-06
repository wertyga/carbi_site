import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
	isOpen: boolean,
};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '5rem',
		position: 'relative',
		zIndex: 3,
	},
	listIcon: {
		width: '100%',
		marginTop: '1rem',
	},
	tabs: {
		width: '100%',
		boxShadow: ({ isOpen }: StyleProps) => isOpen && '1px 6px 8px rgba(0,0,0, 0.1)',
		backgroundColor: ({ isOpen }: StyleProps) => isOpen && theme.palette.background.default,
		[theme.breakpoints.down('xs')]: {
			position: 'absolute',
			top: '4rem',
			left: 0,
		},
	},
	tab: {
		minWidth: 'initial',
		width: '100%',
	},
}));

export default useStyles;
