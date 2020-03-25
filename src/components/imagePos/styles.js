import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    color: '#fff',
    left: 0,
    borderRadius: '50%',
    minHeight: 60,
    maxHeight: 60,
    minWidth: 60,
    maxWidth: 60,
    background: 'rgba(0,0,0,0.4)',
  },
}));
