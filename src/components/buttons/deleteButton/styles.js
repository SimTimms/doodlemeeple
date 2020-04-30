import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
      marginBottom: 3,
    },
    deleteButton: {
      margin: 3,
      boxShadow: 'none',
      marginLeft: 'auto',
      minWidth: 32,
      maxWidth: 32,
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '50%',
      background: theme.palette.error.main,
    },
    deleteButtonConfirmYes: {
      marginLeft: 5,
      boxShadow: 'none',
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '5px 0 0 5px',
      background: theme.palette.error.main,
      color: '#fff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    deleteButtonConfirmNo: {
      boxShadow: 'none',
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '0 5px 5px 0',
    },
  };
});
