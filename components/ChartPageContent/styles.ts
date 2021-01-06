import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    [breakpoints.up('sm')]: {
      overflow: 'hidden',
      padding: '2px',
    },
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItem: 'initial',
    },
  },
  childMenu: {
    [breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: `${spacing(3)}rem`,
    },
    [breakpoints.up('sm')]: {
      marginRight: `${spacing(3)}rem`,
    },
  },
  mobilePairs: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
  },
  mobileClose: {
    position: 'absolute',
    padding: `${spacing(0)}rem`,
    boxSizing: 'border-box',
    backgroundColor: palette.background.default,
    top: 0,
    right: 0,
    zIndex: 2,
  },
  chartContentMobile: {
    width: '100%',
  },
}));

export default useStyles;
