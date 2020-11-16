import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paymentStatus: {
    background: '#ccc',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 4,
  },
  good: { background: theme.palette.secondary.main },
  red: { background: theme.palette.error.main },
}));
