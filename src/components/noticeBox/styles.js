import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginTop: 20,
  },
  primary: {
    width: '100%',
    background: theme.palette.primary.main,
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginBottom: 20,
  },
  warning: {
    width: '100%',
    background: theme.palette.error.main,
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginBottom: 20,
  },
  secondary: {
    width: '100%',
    background: theme.palette.secondary.main,
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginBottom: 20,
  },
}));
