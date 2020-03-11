import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      background: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',

      '&:hover': {
        background: theme.palette.secondary.light,
      },
    },
    cancel: {
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',

      '&:hover': {
        background: '#ccc',
      },
    },
    hide: { display: 'none' },
    skillWrapper: {
      display: 'none',
      width: '100%',
      boxShadow: '',
    },
    skillWrapperOpen: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      padding: 20,
    },
    skillCard: {
      padding: 10,
      boxSizing: 'border-box',
      background: theme.palette.grey.A100,
      width: '100%',
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.secondary.main,
        color: '#fff',
      },
    },
  };
});
