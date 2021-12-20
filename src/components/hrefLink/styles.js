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
  onBlack: {
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
    padding: 3,
    '&:hover': { color: '#ddd' },
  },
}));
