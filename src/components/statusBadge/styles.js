import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dull: {
    color: '#fff',
    background: theme.palette.primary.dark,
    padding: 3,
    borderRadius: 2,
    marginTop: 3,
  },
  red: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
}));
