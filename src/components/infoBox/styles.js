import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  descriptionBox: {
    background: '#fafafa',
    padding: 10,
  },
  openClose: {
    padding: 10,
    margin: 10,
    width: '100%',
  },
  openCloseOff: { display: 'none' },
  infoBox: {
    marginTop: 10,
    background: theme.palette.primary.main,
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  helpIcon: {
    marginLeft: 5,
    cursor: 'pointer',
    color: theme.palette.primary.light,
    fontSize: 16,
    lineHeight: 1.1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
