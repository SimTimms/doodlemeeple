import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 0,

      marginTop: 0,
    },
    errorMsg: {
      marginBottom: 2,
      marginLeft: 10,
    },
  };
});
