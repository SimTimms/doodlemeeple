import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  more: {
    padding: 20,
    background: theme.palette.error.main,
    color: '#fff',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
