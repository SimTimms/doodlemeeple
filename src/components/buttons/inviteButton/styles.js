import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#ddd',
    width: 100,
  },
  rootOn: {
    background: theme.palette.secondary.main,
  },
  iconOn: { color: theme.palette.primary.main },
  iconOff: { color: '#444' },
}));
