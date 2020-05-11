import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  helpIcon: {
    marginLeft: 5,
    cursor: 'pointer',
    color: '#aaa',
    lineHeight: 1.1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  titleLine: {
    height: 2,
    background: 'rgba(0,0,0,0.1)',
  },
}));
