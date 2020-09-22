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
  };
});
