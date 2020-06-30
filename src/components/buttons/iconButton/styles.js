import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.primary.main,
    padding: '10px 20px 10px 20px',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    fontSize: 14,
    letterSpacing: 1,
    boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  iconButtonSecondary: {
    background: '#fff',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
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
  iconButtonTextWhite: {
    background: 'rgba(0,0,0,0)',
    color: '#fff',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'uppercase',
    letterSpacing: 1.3,
    '&:hover': {
      background: 'rgba(255,255,255,0.4)',
    },
  },
  iconButtonTextDark: {
    background: 'rgba(0,0,0,0)',
    color: '#222',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'uppercase',
    letterSpacing: 1.3,
    '&:hover': {
      background: 'rgba(0,0,0,0.2)',
    },
  },
  iconButtonWarning: {
    background: theme.palette.error.main,
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
  iconButtonIconTextWhite: {
    color: '#fff',
    marginLeft: 10,
  },
  iconButtonIconTextDark: {
    color: '#222',
    marginLeft: 10,
  },
  iconButtonIconWhite: {
    color: '#fff',
    marginLeft: 10,
  },
  iconButtonIconSecondary: {
    color: theme.palette.primary.main,
    marginLeft: 10,
  },
}));
