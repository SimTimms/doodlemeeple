import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 300,
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    boxSizing: 'border-box',
  },
  avatar: {
    minWidth: 120,
    maxWidth: 120,
    minHeight: 120,
    maxHeight: 120,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.4)',
  },
  feature: {
    minWidth: 640,
    maxWidth: 640,
    minHeight: 110,
    maxHeight: 110,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.4)',
  },
}));
