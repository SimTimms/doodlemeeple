import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  fixed: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 10,
    left: 0,
    top: 0,
    background: 'rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    padding: 30,
    paddingTop: 10,
    boxSizing: 'border-box',
    textAlign: 'center',
    background: '#fff',
    borderRadius: 10,
    minWidth: 400,
  },
  hide: {
    display: 'none',
  },
}));
