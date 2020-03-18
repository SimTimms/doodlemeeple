import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    skillCard: {
      padding: 10,
      boxSizing: 'border-box',
      background: theme.palette.grey.A100,
      width: '40%',
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
      },
    },
  };
});
