import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: { color: theme.palette.primary.dark, fontSize: 14 },
  descriptionBox: {
    background: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
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
  titleLine: {
    height: 2,
    borderTop: '1px dashed #ccc',
  },
}));
