import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dashbox: {
    border: '1px solid #444',
  },
  trafficLight: {
    width: 50,
    height: 20,
    borderRadius: 3,
    color: '#fff',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  },
  red: { background: theme.palette.error.main },
  amber: { background: theme.palette.warning.main },
  green: { background: theme.palette.secondary.main },
  dull: { background: '#eee', boxShadow: 'none' },
}));
