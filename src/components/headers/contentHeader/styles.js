import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  icon: { fontSize: 20, color: '#ddd' },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid #ddd',
    padding: '10px 0 20px 0',
    marginBottom: 10,
  },
});
