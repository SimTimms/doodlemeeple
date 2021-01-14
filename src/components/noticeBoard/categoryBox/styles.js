import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    catBox: {
      backgroundColor: theme.palette.primary.main,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      border: '4px solid #111',
      position: 'relative',
      cursor: 'pointer',
      '&:first-child': { borderLeft: '8px solid #111' },
      '&:last-child': { borderRight: '8px solid #111' },
      '&:hover': { opacity: 0.8 },
    },
    sizeLarge: {
      width: '25%',
      maxWidth: 300,
      maxHeight: 150,
      minHeight: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sizeSmall: {
      width: '12.5%',
      maxWidth: 150,
      maxHeight: 75,
      minHeight: 75,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    catBoxArtist: {
      color: 'rgba(255,255,255,0.8)',
      width: '100%',
      fontSize: 10,
      position: 'absolute',
      top: 0,
      background: 'rgba(0,0,0,0.2)',
    },
    catBoxTitleMain: {
      color: '#fff',
      textShadow: '1px 1px 2px rgb(0,0,0,1)',
      background: 'rgba(0,0,0,0.7)',
      paddingTop: 3,
      paddingBottom: 3,
      width: '100%',
      height: 42,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: ' 0px 20px 10px 10px rgb(0,0,0,0.4)',
    },
    catBoxTitleSecondary: {
      color: '#fff',
      background: '#111',
      fontSize: 10,
      letterSpacing: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 5,
    },
  };
});
