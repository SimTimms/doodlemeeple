import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
    resize: 'vertical',
  },
  descriptionBox: {
    background: '#fff',
    color: '#222',
    padding: 30,
    lineHeight: 1,
    textAlign: 'center',
    border: '2px dotted #ccc',
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
  },
  small: { minWidth: 100 },
  medium: { minWidth: 150 },
  large: { minWidth: 200 },
  openClose: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
