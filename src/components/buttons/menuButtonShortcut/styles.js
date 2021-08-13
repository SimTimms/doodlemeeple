import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderRadius: 2,
    color: '#fff',
  },

  buttonRootColumn: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: 8,
    width: 120,
  },
  buttonText: {
    textAlign: 'right',
    marginLeft: 10,
    marginRight: 10,
    fontSize: '1rem',
  },
  buttonColumn: { marginLeft: 0, marginRight: 0, marginTop: 4 },
  iconTextOnlyButton: { marginLeft: 0, marginRight: 0 },
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
  iconButtonImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 26,
    maxWidth: 26,
    maxHeight: 26,
    minHeight: 26,
    borderRadius: '50%',
    marginRight: 0,
    position: 'relative',

    '&:visited': {
      background: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
    },
  },
  iconButtonOnly: { marginRight: 0 },
  iconImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    position: 'relative',
    width: 24,
    borderRadius: '50%',
    textAlign: 'center',
    minWidth: 26,
    maxWidth: 26,
    maxHeight: 26,
    minHeight: 26,
  },
  iconIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 5,
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '1rem',
    background: 'rgba(255,255,255,0.3)',
  },
  backHover: {
    '&:hover': {
      opacity: 0.4,
    },
  },
  active: {
    background: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  borderSecondary: {
    background: `${theme.palette.secondary.main}`,
  },
  borderWarning: {
    background: `${theme.palette.primary.main}`,
  },
  warning: {
    background: theme.palette.primary.main,
    boxShadow:
      'inset 1px 1px 1px rgba(255,255,255,0.4),inset -1px -1px 1px rgba(0,0,0,0.2)',
  },
  primary: {
    background: theme.palette.primary.main,
    boxShadow:
      'inset 1px 1px 1px rgba(255,255,255,0.4),inset -1px -1px 1px rgba(0,0,0,0.2)',
  },
  secondary: {
    background: theme.palette.secondary.main,
    boxShadow:
      'inset 1px 1px 1px rgba(255,255,255,0.4),inset -1px -1px 1px rgba(0,0,0,0.2)',
  },
  iconIconNoMargin: { margin: 0 },
  iconIconColumn: {
    marginRight: 0,
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1rem',
  },
  count: {
    background: theme.palette.secondary.main,
    borderRadius: 2,
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -16,
    color: theme.palette.primary.dark,
    zIndex: 2,
  },

  iconTextOnly: { display: 'none' },

  isOn: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff !important',
  },
  isOff: {
    color: '#222 !important',
  },
  disabled: { opacity: 0.5 },
}));
