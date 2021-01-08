import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  listItem: {
    padding: `${spacing(0)}rem 0`,
    cursor: 'pointer',
  },
}));

export default useStyles;
