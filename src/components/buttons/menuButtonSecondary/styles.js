import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    cursor: 'pointer',
    marginRight: 20,
  },
  title: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  circle: {
    borderRadius: '50%',
    height: 20,
    width: 20,
    background: '#ddd',
  },
  circleOn: {
    background: theme.palette.error.main,
  },
}));
