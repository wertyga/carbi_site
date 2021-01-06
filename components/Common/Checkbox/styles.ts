import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
	checked: boolean,
};

const useStyles = makeStyles(({ palette }: Theme) => ({
  checkboxRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: '100%',
  },
  checkbox: ({ checked }: Props) => ({
    border: checked ? 'none' : '2px solid rgba(0, 0, 0, 0.54)',
    width: '18px',
    height: '18px',
    backgroundColor: checked ? palette.secondary[palette.type] : 'transparent',
    borderRadius: '3px',
    margin: '2px',
    position: 'relative',
  }),
  check: {
    border: '3px solid transparent',
    borderBottomColor: palette.background.default,
    borderRightColor: palette.background.default,
    position: 'absolute',
    width: '10px',
    height: '14px',
    top: 0,
    left: 4,
    transform: 'rotate(42deg)',
    borderRadius: 3,
  },
}));

export default useStyles;
