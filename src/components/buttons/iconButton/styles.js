import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.primary.main,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  iconButtonDisabled: {
    cursor: 'pointer',
    background: '#ddd',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  iconButtonIcon: {
    color: '#fff',
    marginLeft: 10,
  },
}));
