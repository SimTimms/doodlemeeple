import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      height: 300,
      background:
        'linear-gradient(180deg, rgba(52,190,177,1) 0%, rgba(52,190,177,1) 53%, rgba(39,168,156,1) 100%)',
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
      minWidth: '100%',
      minHeight: 300,
      maxHeight: 300,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'flex-end',
    },
    options: {
      backgroundColor: theme.palette.secondary.dark,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    articleAvatar: {
      minWidth: 50,
      maxWidth: 50,
      minHeight: 50,
      maxHeight: 50,
      marginLeft: 10,
      marginRight: 10,
      padding: 3,
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
    },
  };
});
