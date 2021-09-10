import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: '#efeff5',
    width: 'calc(100vw - 200px)',
    height: '100vh',
  },
  row: { width: '100%' },
}));
