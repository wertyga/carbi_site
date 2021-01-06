import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
	compare: boolean,
};

const useStyles = makeStyles((theme: Theme) => ({
	pairsAction: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.down('xs')]: {
			position: 'fixed',
			paddingLeft: `${theme.spacing(3)}rem`,
			paddingRight: `${theme.spacing(3)}rem`,
			zIndex: 2,
		},
	},
	successBtn: {
		backgroundColor: theme.palette.success.main,
		color: '#ffffff',
		width: '7rem',
		'&:hover': {
			backgroundColor: theme.palette.success.main,
			opacity: 0.8,
		},
	},
	clearBtn: ({ compare }: Props) => ({
		backgroundColor: theme.palette.error.main,
		color: '#ffffff',
		width: compare ? '7rem' : '100%',
		'&:hover': {
			backgroundColor: theme.palette.error.main,
			opacity: 0.8,
		},
	}),
}));

export default useStyles;
