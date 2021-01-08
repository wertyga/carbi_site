import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
	isMarketChosen: boolean,
};

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '15rem',
		minHeight: '100%',
		position: 'relative',
	},
	loading: {
		position: 'absolute',
		top: 'calc(50% - 20px)',
		left:  'calc(50% - 20px)',
	},
	marketsMenuList: {
		overflowY: 'auto',
		height: '30rem',
		paddingBottom: ({ isMarketChosen }: Props) => isMarketChosen ? '3rem' : 0,
	},
	cardHeader: {
		[theme.breakpoints.down('xs')]: {
			paddingBottom: 0,
		},
	},
}));

export default useStyles;
