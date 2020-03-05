import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  imageIconWrapper: {
    color: '#fff',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '0 0  0 10px',
    paddingLeft: 10,

    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0,0,0,0.5)',
    },
  },
  imageIcon: {
    fontSize: 50,
  },
  imageIconLabel: {},
}));
