import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  profileThumb: {
    backgroundColor: '#ddd',
    backgroundSize: 'cover',
    border: '2px solid #ddd',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  declined: {
    backgroundColor: '#000',
    opacity: '0.5',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
