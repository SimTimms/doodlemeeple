import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    cursor: 'pointer',
    marginRight: 20,
  },
  title: {
    marginLeft: 10,
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
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
    minHeight: 26,
    minWidth: 26,
    color: '#fff',
    background: theme.palette.primary.main,
  },
  disabled: { opacity: 0.4 },
  count: {
    background: theme.palette.secondary.main,
    borderRadius: 2,
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.dark,
    zIndex: 2,
    fontSize: 10,
  },
}));
