import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
}));
