import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  more: {
    padding: 20,
    color: theme.palette.error.main,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
