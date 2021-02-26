import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rootRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  countsStyle: {
    position: 'absolute',
    top: -5,
    right: -5,
    maxHeight: 20,
    minHeight: 20,
    maxWidth: 20,
    minWidth: 20,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.error.main,
    color: '#fff',
  },
  profileButton: {
    width: '100%',
    cursor: 'pointer',
    '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
  },
  profileThumb: {
    backgroundColor: '#ddd',
    backgroundSize: 'cover',
    border: '2px solid #ddd',
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 20,
  },
}));
