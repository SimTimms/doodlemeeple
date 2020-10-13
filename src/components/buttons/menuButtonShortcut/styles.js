import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 22,
    maxWidth: 22,
    maxHeight: 22,
    minHeight: 22,
    borderRadius: '50%',
    marginRight: 0,
    position: 'relative',

    '&:visited': {
      background: 'none',
    },
  },
  iconButtonOnly: { marginRight: 0 },
  iconIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    position: 'relative',
    fontSize: 14,
    marginRight: 12,
    padding: 5,
    background: 'rgba(0,0,0,0.05)',
    borderRadius: '50%',
    textAlign: 'center',
  },
  backHover: {
    '&:hover': {
      opacity: 0.4,
    },
  },
  borderSecondary: {
    background: `${theme.palette.secondary.main}`,
  },
  borderWarning: {
    background: `${theme.palette.error.main}`,
  },
  warning: { background: theme.palette.error.main },
  primary: { background: theme.palette.primary.main },
  secondary: {
    background: theme.palette.secondary.main,
    boxShadow: 'inset 0 0 3px rgba(255,255,255,0.1),0 0 5px rgba(0,0,0,0.2)',
  },
  iconIconNoMargin: { margin: 0 },
  iconIconColumn: {
    marginRight: 0,
  },
  dark: { color: theme.palette.primary.light },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#444',
  },

  count: {
    background: theme.palette.error.main,
    borderRadius: '50%',
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    marginRight: 5,
    marginTop: -15,
    color: '#fff',
    border: '2px solid #fff',
    fontSize: 10,
    zIndex: 2,
  },
  spaceAbove: { marginTop: 4 },
  button: { textAlign: 'right', color: '#222', fontSize: 12 },
  buttonMobile: {
    padding: 5,
    textAlign: 'center',
  },
  buttonRoot: {
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  buttonRootNoBackHover: {
    '&:hover': {
      background: 'none !important',
    },
  },
  buttonRootColumn: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: 8,
    width: 120,
  },
  active: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    background: 'rgba(255,255,255,0.2)',
  },
}));
