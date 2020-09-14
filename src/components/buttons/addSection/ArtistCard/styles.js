import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    skillCard: {
      padding: 10,
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
      background: theme.palette.primary.main,
      width: '33%',
      maxWidth: 350,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      color: '#fff',
      '&:hover': {
        background: theme.palette.primary.light,
        color: '#222',
      },
    },
  };
});
