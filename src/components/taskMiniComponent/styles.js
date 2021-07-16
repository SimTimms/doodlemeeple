import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    noTask: {
      color: theme.palette.primary.main,
      marginTop: 20,
      marginBottom: 20,
    },
    countIcon: {
      width: 32,
      height: 32,
      backgroundColor: '#aaa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      borderRadius: '50%',
      margin: 3,
      cursor: 'pointer',
    },
    countIconOn: {
      backgroundColor: theme.palette.error.main,
    },
    notificationTitle: { color: 'rgba(255,255,255,0.5)', fontSize: '0.8em' },
  };
});
