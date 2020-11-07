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
  desktop: { width: '100%', display: 'flex', flexDirection: 'row' },
  mobile: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  dull: { color: '#ddd', boxShadow: 'none' },
  red: { color: theme.palette.error.main },
  amber: { color: theme.palette.warning.main },
  green: { color: theme.palette.secondary.main },
  status: {
    background: '#efeff5',
    padding: '5px 30px 5px 30px',
    borderRadius: 3,
    color: 'rgba(0,0,0,0.5)',
  },
  statusGreen: {
    background: theme.palette.secondary.main,
    color: '#fff',
  },
  statusRed: {
    background: theme.palette.error.main,
  },
}));
