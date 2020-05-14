import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.3)',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.primary.light,
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      padding: 20,
    },
    skillCard: {
      padding: 10,
      boxSizing: 'border-box',
      background: theme.palette.grey.A100,
      width: '40%',
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
      },
    },
  };
});
