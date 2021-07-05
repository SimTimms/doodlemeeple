import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#333',
    backgroundPosition: 'center center',
    height: 120,
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  noBG: { minHeight: 0, maxHeight: 0, height: 0 },
}));
