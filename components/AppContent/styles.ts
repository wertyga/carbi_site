import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  appContainer: {
    padding: `${spacing(1)}rem`,
  },
}));

export default useStyles;
