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
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 2,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    '&:visited': {
      background: 'red',
    },
  },
  iconButtonSecondary: {
    background: '#fff',
    color: theme.palette.primary.main,
    border: `1px solid #fff`,
    '&:hover': {
      background: '#eaeaea',
    },
  },
  iconButtonText: {
    background: 'rgba(0,0,0,0)',
    color: '#aaa',
    border: 'none',
    boxShadow: 'none',
    justifyContent: 'center',
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
    justifyContent: 'center',
    letterSpacing: 1.3,
    '&:hover': {
      background: 'rgba(255,255,255,0.4)',
    },
  },
  iconButtonTextDark: {
    background: 'rgba(0,0,0,0)',
    color: theme.palette.primary.main,
    border: 'none',
    boxShadow: 'none',
    textTransform: 'uppercase',
    justifyContent: 'center',
    letterSpacing: 1.3,
    textShadow: '3px 3px 4px rgba(0,0,0,0.1)',
    '&:hover': {
      background: '#efeff5',
    },
  },
  iconButtonTextMini: {
    background: 'rgba(0,0,0,0)',
    color: '#222',
    border: 'none',
    boxShadow: 'none',
    margin: 0,
    letterSpacing: 1.3,
    justifyContent: 'center',
    textShadow: '3px 3px 4px rgba(0,0,0,0.1)',
    textTransform: 'none',
    '&:hover': {
      background: '#efeff5',
    },
  },
  iconButtonTextError: {
    background: 'rgba(0,0,0,0)',
    color: theme.palette.error.main,
    border: 'none',
    boxShadow: 'none',
    textTransform: 'uppercase',
    justifyContent: 'center',
    letterSpacing: 1.3,
    textShadow: '3px 3px 4px rgba(0,0,0,0.1)',
    '&:hover': {
      background: 'rgba(0,0,0,0.2)',
      color: '#444',
    },
  },
  iconButtonWarning: {
    background: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`,

    '&:hover': {
      background: theme.palette.error.dark,
    },
  },
  iconButtonDisabled: {
    cursor: 'pointer',
    background: '#ddd',
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  iconButtonIcon: {
    color: '#fff',
    fontSize: 12,
  },
  iconButtonIconText: {
    color: '#aaa',
  },
  iconButtonIconTextWhite: {
    color: '#fff',
  },
  iconButtonIconTextDark: {
    color: theme.palette.primary.main,
  },
  iconButtonIconWhite: {
    color: '#fff',
  },
  iconButtonIconSecondary: {
    color: theme.palette.primary.main,
  },
  iconButtonIconTextError: {
    color: theme.palette.error.main,
  },

  iconButtonIconTextMini: {
    color: '#222',
  },
  iconRight: { marginLeft: 10 },
  iconLeft: { marginRight: 10 },
}));
