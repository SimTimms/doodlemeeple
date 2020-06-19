import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    background: '#fff',
    marginTop: 30,
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  fullWidth: { width: '100%' },
  accepted: {
    width: '100%',
    background: theme.palette.secondary.main,
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginBottom: 20,
  },
  wrapper: {
    padding: 40,
    paddingTop: 20,
    boxSizing: 'border-box',
    width: '100%',
    background: '#fff',
  },
  id: { color: theme.palette.primary.main, fontSize: 10 },
}));
