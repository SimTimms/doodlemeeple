import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: { fontSize: 12 },
  icon: {
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 4,
    width: 26,
    height: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cursor: { cursor: 'pointer' },
}));
