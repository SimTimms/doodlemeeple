import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    catBox: {
      backgroundColor: theme.palette.primary.main,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      position: 'relative',
      cursor: 'pointer',
      '&:hover': { opacity: 0.8 },
      outline: '1px solid #fff',
    },
    sizeLarge: {
      width: '33.3%',
      maxHeight: 183,
      minHeight: 183,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sizeSmall: {
      width: '33.3%',
      maxHeight: 40,
      minHeight: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    catBoxArtist: {
      color: 'rgba(255,255,255,1)',
      fontSize: 14,
      position: 'absolute',
      top: 0,
      background: 'rgba(0,0,0,0.2)',
    },
    catBoxTitleMain: {
      color: '#fff',
      background: 'rgba(0,0,0,0.2)',
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 10,
      paddingRight: 10,
      height: 42,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
    },
    catBoxTitleSecondary: {
      color: '#fff',
      fontSize: 12,
      letterSpacing: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };
});
