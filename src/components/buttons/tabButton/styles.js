import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.primary.main,
    padding: 5,
    marginTop: 10,
    borderRadius: '5px 5px 0 0',
    marginLeft: 2,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  iconButtonSecondary: {
    background: '#fff',
    color: theme.palette.primary.main,

    '&:hover': {
      background: '#eaeaea',
    },
  },
  iconButtonText: {
    background: 'rgba(0,0,0,0)',
    color: '#aaa',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      background: '#eaeaea',
    },
  },
  iconButtonWarning: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.error.dark,
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
  iconButtonIconText: {
    color: '#aaa',
    marginLeft: 10,
  },
  iconButtonIconSecondary: {
    color: theme.palette.primary.main,
    marginLeft: 10,
  },
}));
