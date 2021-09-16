import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': { color: theme.palette.secondary.dark },
  },
  underline: {
    textDecoration: 'underline',
  },
}));
