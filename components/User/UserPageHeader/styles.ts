import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
  userHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& label': {
      marginRight: 0,
    },
  },
}));

export default useStyles;
