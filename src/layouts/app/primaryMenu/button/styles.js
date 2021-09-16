import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: { display: 'flex', alignItems: 'center', width: '100%' },
  column: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
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
    color: '#fff',
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
  cursorActive: {
    transition: 'all 0.2s ',
    background: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
  countIcon: {
    borderRadius: 2,
    background: theme.palette.secondary.main,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    color: theme.palette.primary.dark,
  },
}));
