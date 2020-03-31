import { makeStyles } from '@material-ui/core/styles';

export const toastStyles = makeStyles(theme => {
  return {
    toastIcon: { color: theme.palette.primary.main },
    toastBody: { width: '100%', textAlign: 'center' },
    toast: {
      fontSize: 14,
      width: 100,
      marginLeft: 'auto',
    },
    progress: { background: `${theme.palette.secondary.light}` },
  };
});
