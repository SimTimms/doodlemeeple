import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#efeff5',
    display: 'flex',
    width: '100vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100vh',
    overflow: 'hidden ',
  },
  row: { flexDirection: 'column' },
}));
