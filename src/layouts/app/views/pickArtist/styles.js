import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.secondary.main,
    padding: 5,
    margin: 5,
    color: '#fff',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },

  iconButtonIcon: {
    color: '#fff',
  },
  creativeWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  miniProfile: {
    minWidth: 60,
    maxWidth: 60,
    minHeight: 60,
    maxHeight: 60,
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: '3px solid #fff',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
    marginRight: 10,
    '&:hover': {
      border: `3px solid ${theme.palette.secondary.main}`,
    },
  },
  miniProfileBlank: {
    minWidth: 60,
    maxWidth: 60,
    minHeight: 60,
    maxHeight: 60,
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: '3px solid #fff',
    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.2)',
    background: '#fff',
    marginRight: 10,
  },
  miniProfileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'nowrap',
    padding: 10,
    boxSizing: 'border-box',
  },
  miniProfileActionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'nowrap',
    padding: 10,
    boxSizing: 'border-box',
  },
  closeIcon: {
    background: '#fff',
    position: 'absolute',
    borderRadius: '50%',
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.error.main,
      color: '#fff',
    },
  },
  closeWrapper: { position: 'relative' },
  button: { cursor: 'pointer' },
}));
