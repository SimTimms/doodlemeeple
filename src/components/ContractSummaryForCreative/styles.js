import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  warning: { color: theme.palette.primary.main },
  alignLeft: {
    fontWeight: 900,
    marginRight: 10,
    minWidth: 90,
    textAlign: 'left',
  },
  alignLeftOnly: {
    textAlign: 'left',
  },
}));
