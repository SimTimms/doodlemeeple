import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      height: 50,
      background: theme.palette.primary.dark,
    },
    dashText: { color: '#fff', fontSize: 10, marginLeft: 3 },
    creator: {
      color: theme.palette.primary.light,
      fontSize: 10,
      marginLeft: 5,
    },
    pointer: {
      cursor: 'pointer',
      '&:hover': { background: 'rgba(255,255,255,0.1)' },
      display: 'flex',
      alignItems: 'center',
      padding: 3,
      borderRadius: 3,
    },
  };
});
