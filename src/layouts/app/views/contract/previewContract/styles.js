import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: 700,
    background: '#fff',
    marginTop: 30,
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
  },
  id: { color: theme.palette.primary.main, fontSize: 10 },
}));
