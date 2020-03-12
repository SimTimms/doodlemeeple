import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  deleteButton: {
    margin: 3,
    boxShadow: 'none',
    marginLeft: 'auto',
    minWidth: 32,
    maxWidth: 32,
    minHeight: 32,
    maxHeight: 32,
    borderRadius: '50%',
  },
  deleteButtonConfirmYes: {
    marginLeft: 5,
    boxShadow: 'none',

    minHeight: 32,
    maxHeight: 32,
    borderRadius: '5px 0 0 5px',
  },
  deleteButtonConfirmNo: {
    boxShadow: 'none',
    minHeight: 32,
    maxHeight: 32,
    borderRadius: '0 5px 5px 0',
  },
});
