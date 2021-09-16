import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageIconWrapper: {
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    borderRadius: '50%    ',
    minHeight: 60,
    maxHeight: 60,
    minWidth: 60,
    maxWidth: 60,
    border: '1px solid rgba(0,0,0,0.1)',
    background: 'rgba(255,255,255,1)',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0,0,0,0.2)',
    },
  },

  imageIconDelete: {
    fontSize: 20,
    background: theme.palette.primary.main,
    borderRadius: '50%',
    padding: 5,
  },
  imageIcon: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  imageIconLabel: {},
}));
