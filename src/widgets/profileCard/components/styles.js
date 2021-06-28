import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: 180,
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  actionsWrapper: { width: '100%' },
  noBG: { minHeight: 0, maxHeight: 0, height: 0 },
  noProfile: { display: 'none' },
  creativeCardBackground: {
    minWidth: 60,
    maxWidth: 60,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: '50%',
    border: '2px solid #fff',
    cursor: 'pointer',
    backgroundColor: '#ddd',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    margin: 5,
  },
  profileNoBG: { marginTop: 10 },
}));
