import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    deleteButton: {
      margin: 3,
      marginLeft: 'auto',
      minWidth: 32,
      maxWidth: 32,
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '50%',
      background: theme.palette.error.main,
      boxShadow: '5px 5px 5px rgba(0,0,0,0.2)',
    },
    deleteButtonConfirmYes: {
      marginLeft: 5,
      boxShadow: 'none',
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '5px 0 0 5px',
      background: theme.palette.error.main,
    },
    deleteButtonConfirmNo: {
      boxShadow: 'none',
      minHeight: 32,
      maxHeight: 32,
      borderRadius: '0 5px 5px 0',
    },
  };
});
