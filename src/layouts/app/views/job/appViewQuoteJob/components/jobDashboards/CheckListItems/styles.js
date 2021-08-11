import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tag: {
    color: '#fff',
    padding: '4px 12px 4px 4px',
    borderRadius: 5,
    fontSize: 12,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  dull: { background: '#efeff5', color: '#444', boxShadow: 'none' },
  red: { background: theme.palette.primary.main },
  amber: { background: theme.palette.warning.main },
  green: { background: theme.palette.secondary.main },
  primary: { background: theme.palette.primary.main },
}));
