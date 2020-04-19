import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    skillCard: {
      padding: 10,
      paddingTop: 30,
      paddingBottom: 30,
      boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
      boxSizing: 'border-box',
      background: '#fff',
      width: '100%',
      maxWidth: 350,
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      '&:hover': {
        background: '#444',
        color: '#fff',
      },
    },
  };
});
