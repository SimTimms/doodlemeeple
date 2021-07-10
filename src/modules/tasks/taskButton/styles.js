import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  taskRoot: {
    marginTop: 10,
    boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    borderLeft: '1px solid rgba(0,0,0,0.05)',
    borderRight: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 280,
    padding: 0,
    marginBottom: 10,
  },
  primary: {
    background: theme.palette.primary.main,
    '&:hover': { background: theme.palette.primary.light },
  },
  secondary: {
    background: theme.palette.secondary.main,
    '&:hover': { background: theme.palette.secondary.light },
  },
  warning: {
    background: theme.palette.error.main,
    '&:hover': { background: theme.palette.error.light },
  },
  grey: {
    background: '#ababba',
    '&:hover': { background: '#bebed1' },
  },
  blue: {
    background: '#4287f5',
    '&:hover': { background: '#4167f0' },
  },
  taskIcon: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginRight: 4 },
  taskTitle: {
    color: '#222',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 4,
    paddingBottom: 10,
    paddingTop: 5,
  },
  taskSubTitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
  },
}));
