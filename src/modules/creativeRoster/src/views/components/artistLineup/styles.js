import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
