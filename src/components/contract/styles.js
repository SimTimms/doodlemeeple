import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'left',
    background: '#fff',
    borderRadius: 5,
    border: '1px dotted #ddd',
    padding: 10,
    boxSizing: 'border-box',
  },
  id: { color: theme.palette.primary.main, fontSize: 10 },
}));
