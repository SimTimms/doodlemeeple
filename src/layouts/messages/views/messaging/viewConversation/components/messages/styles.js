import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,0.8)',
    zIndex: 11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
