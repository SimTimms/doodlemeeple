import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: { width: '100%' },
  fullWidth: { width: '100%' },
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    borderTop: '1px dotted #ddd',
    borderBottom: '1px dotted #ddd',
    marginTop: 5,
    '&:first-child': {
      borderTop: 'none',
    },
  },
}));
