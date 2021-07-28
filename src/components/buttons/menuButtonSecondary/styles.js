import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 20,
    cursor: 'pointer',
    marginRight: 20,
    width: 100,
  },
  title: {
    paddingTop: 5,
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  },
  icon: { fontSize: '1rem' },
  circle: {
    borderRadius: '50%',
    height: 26,
    width: 26,
    background: 'rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  circleOn: {
    color: '#fff',
    background: theme.palette.error.main,
  },
}));
