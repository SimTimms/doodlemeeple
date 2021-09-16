import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: 5,
    width: 220,
  },
  title: {
    fontSize: '1rem',
    textAlign: 'right',
  },
  circle: {
    background: '#ddd',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginRight: 10,
    minHeight: 26,
    minWidth: 26,
  },
  active: { background: theme.palette.secondary.main },
}));
