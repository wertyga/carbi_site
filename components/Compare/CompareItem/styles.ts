import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, typography }: Theme) => ({
	compareItem: {
		display: 'flex',
		width: 'calc(100% - 1px)',
		flexDirection: 'column',
		padding: `${spacing(0)}rem ${spacing(1)}rem`,
		cursor: 'pointer',
		position: 'relative',
	},
	marketData: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	marketItem: {
		display: 'flex',
		margin: `${spacing(0)}rem ${spacing(1)}rem 0 0`,
		'& span:first-child': {
			marginRight: `${spacing(0)}rem`,
		},
	},
	pair: {
		fontWeight: typography.fontWeightBold,
	},
	compareContainer: {
		width: '99%',
	},
	closeIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
		margin: `${spacing(0)}rem`,
	},
}));

export default useStyles;
