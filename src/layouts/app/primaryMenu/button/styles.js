import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: { fontSize: '1rem' },
  icon: {
    padding: 4,
    width: 26,
    height: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginRight: 10,
  },
  iconImage: { width: 18, height: 18, padding: 7 },
  cursor: {
    cursor: 'pointer',
    transition: 'all 0.2s ',
    color: theme.palette.primary.light,
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
  cursorActive: {
    transition: 'all 0.2s ',
    background: theme.palette.error.main,
    color: '#fff',
    '&:hover': {
      background: theme.palette.error.dark,
    },
  },
}));
