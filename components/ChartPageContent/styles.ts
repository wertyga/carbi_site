import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
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
    height: '100%',
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
  chartContentDesktop: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  menusWrapper: {
    display: 'flex',
  },
}));

export default useStyles;
