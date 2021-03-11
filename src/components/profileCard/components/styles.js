import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: 100,
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  actionsWrapper: { width: '100%' },
  noBG: { minHeight: 0, maxHeight: 0, height: 0 },
  noProfile: { display: 'none' },
  creativeCardBackground: {
    minWidth: 80,
    maxWidth: 80,
    minHeight: 80,
    maxHeight: 80,
    borderRadius: '50%',
    border: '5px solid #fff',
    marginTop: -50,
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
  },
  profileNoBG: { marginTop: 10 },
}));
