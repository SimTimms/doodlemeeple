import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuRoot: { width: '100%' },
  image: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  newStore: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
    paddingTop: 5,
  },
}));
