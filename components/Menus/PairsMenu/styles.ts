import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
	isPairChosen: boolean,
};

const useStyles = makeStyles(({ spacing }: Theme) => ({
	wrapper: {
		position: 'relative',
		width: '15rem',
	},
	pairsMenuList: {
		overflowY: 'auto',
		height: '30rem',
		paddingBottom: ({ isPairChosen }: Props) => isPairChosen ? '3rem' : 0,
	},
	checkbox: {
		padding: 0,
	},
	searchInput: {
		margin: `0 ${spacing(0)}rem`,
	},
}));

export default useStyles;
