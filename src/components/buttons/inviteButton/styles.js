import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#ccc',
    width: 120,
  },
  rootOn: {
    background: theme.palette.secondary.main,
  },
  iconOn: { color: theme.palette.error.main },
  iconOff: { color: '#444' },
}));
