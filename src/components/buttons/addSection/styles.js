import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  console.log(theme);
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
    skillWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };
});
