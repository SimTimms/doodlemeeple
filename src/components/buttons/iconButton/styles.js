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
    fontSize: 12,
    letterSpacing: 1,
    boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    borderRadius: 4,
    display: 'flex',
    flexWrap: 'nowrap',
    minWidth: 'auto',
    minHeight: 38,
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
    background: theme.palette.secondary.main,
    color: '#fff',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
    '&:hover': {
      background: '#eaeaea',
    },
  },
  iconButtonStripe: {
    backgroundImage: '-webkit-linear-gradient(#28A0E5, #015E94)',
    color: '#fff',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
    '&:hover': {
      background: '#015E94',
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
    background: 'rgba(255,255,255,0.4)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: 'none',
    justifyContent: 'center',
    '&:hover': {
      background: 'rgba(255,255,255,0.1)',
    },
  },
  iconButtonTextWhiteMini: {
    background: 'rgba(0,0,0,0)',
    color: 'rgba(255,255,255,0.7)',
    boxShadow: 'none',
    padding: 3,
    margin: 5,
    justifyContent: 'center',
    '&:hover': {
      background: 'rgba(255,255,255,0.4)',
    },
  },
  iconButtonTextDark: {
    background: 'rgba(0,0,0,0)',
    color: '#444',
    boxShadow: 'none',
    fontWeight: 400,
    justifyContent: 'space-between',
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
  iconButtonTextGrey: {
    background: '#c0c0d8',
    border: 'none',
    boxShadow: 'none',
    margin: 0,
    letterSpacing: 1.3,
    justifyContent: 'center',
    textShadow: '3px 3px 4px rgba(0,0,0,0.1)',
    textTransform: 'none',
    '&:hover': {
      background: '#a1a1c5',
    },
  },
  iconButtonTextError: {
    background: 'rgba(0,0,0,0)',
    color: theme.palette.error.main,
    border: 'none',
    boxShadow: 'none',
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
    padding: 3,
  },
  iconButtonIconText: {
    color: '#aaa',
  },
  iconButtonIconTextWhite: {
    color: '#fff',
  },
  iconButtonIconTextWhiteMini: {
    color: 'rgba(255,255,255,0.7)',
  },
  iconButtonIconTextDark: {
    color: '#444',
  },
  iconButtonIconTextGrey: {
    color: '#fff',
  },
  iconButtonIconWhite: {
    color: '#fff',
  },
  iconButtonIconSecondary: {
    color: '#fff',
  },
  iconButtonIconStripe: {
    color: '#fff',
  },
  iconButtonIconTextError: {
    color: theme.palette.error.main,
  },

  iconRight: { marginLeft: 10 },
  iconLeft: { marginRight: 10 },
  noTitle: { marginLeft: 0, marginRight: 0 },
  iconButtonIconTextMini: {
    color: theme.palette.primary.main,
  },
}));
