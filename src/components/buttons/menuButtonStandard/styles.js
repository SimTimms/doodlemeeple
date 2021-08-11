import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 2,
    background: theme.palette.primary.main,
    boxShadow: '3px 3px 6px rgba(0,0,0,0.2)',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 60,
  },
  delete: { background: theme.palette.error.main },
  title: {
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  },
  icon: { fontSize: '1rem' },
  circle: {
    background: theme.palette.secondary.main,
    borderRadius: '4px 0 0 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginRight: 10,
    height: 26,
    width: 26,
  },
}));
