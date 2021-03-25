import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    skillCard: {
      padding: 10,
      boxShadow: 'none',
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: 350,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      color: '#222',
      borderRadius: 0,
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
      },
    },
  };
});
