import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dull: { color: '#ddd', boxShadow: 'none' },
  red: { color: theme.palette.error.main },
  amber: { color: theme.palette.warning.main },
  green: { color: theme.palette.secondary.main },
  primary: { color: theme.palette.primary.main },
}));
