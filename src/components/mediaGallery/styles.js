import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '5px 3px 5px 3px',
  },
  gridList: {
    width: '100%',
  },
  iconButton: {
    cursor: 'pointer',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    width: 32,
    minWidth: 32,
  },
  iconButtonIcon: {
    color: 'rgba(0, 0, 0, 0.6)',
    padding: 0,

    '&:hover': {
      color: '#222',
    },
  },
}));
