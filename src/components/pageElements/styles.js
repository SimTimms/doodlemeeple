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
      paddingTop: 10,
      border: '1px solid #ddd',
      marginTop: 10,
    },
    errorMsg: {
      marginBottom: 2,
      marginLeft: 10,
    },
  };
});
