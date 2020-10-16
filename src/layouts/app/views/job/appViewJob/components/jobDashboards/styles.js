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
  dull: { color: '#ddd', boxShadow: 'none' },
  red: { color: theme.palette.error.main },
  amber: { color: theme.palette.warning.main },
  green: { color: theme.palette.secondary.main },
  status: {
    background: theme.palette.error.main,
    padding: '5px 30px 5px 30px',
    borderRadius: 3,
    color: '#fff',
  },
  statusGreen: {
    background: theme.palette.secondary.main,
  },
}));
