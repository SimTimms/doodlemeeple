import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  column: {
    background: theme.palette.primary.dark,
    height: '100vh',
  },
  columnActive: {
    background: theme.palette.error.main,
    height: '100vh',
  },
  deviceWrapper: {
    height: 67,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  device: { height: 40 },
}));
