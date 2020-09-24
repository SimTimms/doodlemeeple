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
    '&:hover': {
      background: 'theme.palette.primary.dark',
    },
    '&:visited': {
      background: 'none',
    },
  },

  iconButtonOnly: { marginRight: 0 },
  iconIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#222',
    position: 'relative',
    fontSize: 16,
    marginRight: 8,
    background: 'rgba(0,0,0,0.05)',
    borderRadius: '50%',
    padding: 5,
    textAlign: 'center',
  },

  dark: { color: theme.palette.primary.light },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#444',
  },
  countsStyle: {
    position: 'absolute',
    top: -5,
    right: -5,
    maxHeight: 20,
    minHeight: 20,
    maxWidth: 20,
    minWidth: 20,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.error.main,
    color: '#fff',
  },
  button: { textAlign: 'right', color: '#222', fontSize: 14 },
  buttonMobile: {
    padding: 5,
    textAlign: 'center',
  },
  buttonRoot: {
    paddingBottom: 3,
    justifyContent: 'space-between',
  },
  active: {
    borderBottom: `2px solid #aaa`,
  },
}));
