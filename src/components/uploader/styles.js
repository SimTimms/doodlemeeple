import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  imageIconWrapper: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '50%    ',
    minHeight: 60,
    maxHeight: 60,
    minWidth: 60,
    maxWidth: 60,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0,0,0,0.5)',
    },
  },
  imageIcon: {
    fontSize: 30,
  },
  imageIconLabel: {},
}));
