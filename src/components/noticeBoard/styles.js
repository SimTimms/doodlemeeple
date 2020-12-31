import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(180deg, rgba(52,190,177,1) 0%, rgba(52,190,177,1) 53%, rgba(39,168,156,1) 100%)',
      padding: '20px 0 20px 0',
    },
    header4: {
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header5: {
      color: '#fff',
      textAlign: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
    },
    header6: {
      color: '#fff',
      textAlign: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      maxWidth: 300,
    },
    articlePanel: {
      minWidth: 300,
      maxWidth: 300,
      minHeight: 300,
      maxHeight: 300,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    articleAvatar: {
      minWidth: 80,
      maxWidth: 80,
      minHeight: 80,
      maxHeight: 80,
      padding: 3,
      marginTop: -160,
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
    },
  };
});
