import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    background: theme.palette.primary.dark,
    height: '100vh',
    zIndex: 2,
  },
  row: { flexDirection: 'row', width: '100%' },
  columnActive: {
    background: theme.palette.primary.main,
    height: '100vh',
  },
  deviceWrapper: {
    height: 67,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    background: '#39354E',
  },
  device: { height: 40 },
}));
