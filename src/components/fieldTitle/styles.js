import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    height: 5,
    background: theme.palette.primary.main,
  },
}));
