import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '5px 3px 5px 3px',
  },
  image: {
    background: 'none',
    position: 'relative',
    width: 300,
    height: 300,
  },
  imageMobile: {
    background: 'none',
    position: 'relative',
    width: '100%',
    margin: '2%',
    border: '5px solid #fff',
  },
  gridList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    cursor: 'pointer',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    width: 32,
    minWidth: 32,
    background: 'rgba(0,0,0,0.3)',
    padding: 5,
    margin: 5,
  },
  iconButtonIcon: {
    color: '#fff',
    '&:hover': {
      color: '#222',
    },
  },
}));
