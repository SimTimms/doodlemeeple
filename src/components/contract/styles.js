import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    boxSizing: 'border-box',
    textAlign: 'left',
    background: '#fff',
    borderRadius: 5,
    border: '1px dotted #ddd',
  },
  id: { color: theme.palette.primary.main, fontSize: 10 },
}));
