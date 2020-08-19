import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 32,
    maxWidth: 32,
    maxHeight: 32,
    minHeight: 32,
    borderRadius: '50%',
    marginRight: 10,
    boxShadow:
      '1px 1px 3px rgba(0,0,0,0.2), inset 1px 1px 2px rgba(255,255,255,0.4)',
    position: 'relative',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    '&:visited': {
      background: 'red',
    },
  },

  iconIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    position: 'relative',
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
  button: { textAlign: 'right' },
  buttonMobile: {
    padding: 5,
    textAlign: 'center',
  },
}));
