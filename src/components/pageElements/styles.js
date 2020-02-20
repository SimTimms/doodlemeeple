import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: 10,
    },
    errorMsg: {
      marginBottom: 2,
      marginLeft: 10,
    },
  };
});
