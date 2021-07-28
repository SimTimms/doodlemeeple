import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      height: 300,
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    excerptBack: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      width: '100%',
      padding: 30,
      boxSizing: 'border-box',
    },
    excerpt: { color: '#222' },
    excerptAuthor: { color: 'rgba(0,0,0,0.6)' },
    excerptLink: { color: theme.palette.primary.main, fontWeight: 900 },
    header4: {
      color: '#222',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header5: {
      color: '#222',
      textAlign: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
    },
    header6: {
      color: '#222',
      textAlign: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      maxWidth: 300,
    },
    articlePanel: {
      minWidth: '100%',
      minHeight: 188,
      maxHeight: 188,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      backgroundColor: '#fff',
    },
    options: {
      backgroundColor: theme.palette.primary.main,
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
