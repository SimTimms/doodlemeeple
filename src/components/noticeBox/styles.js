import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    boxSizing: 'border-box',
    marginBottom: 20,
    background: theme.palette.primary.main,
  },
  primary: {
    width: '100%',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  warning: {
    width: '100%',
    background: theme.palette.primary.main,
    color: '#fff',
    textAlign: 'center',
  },
  secondary: {
    width: '100%',
    background: theme.palette.secondary.main,
    color: '#fff',
    textAlign: 'center',
  },
}));
