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
    },
    skillCard: {
      padding: 20,
      background: theme.palette.grey.A100,
      width: 100,
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.secondary.light,
      },
    },
  };
});
