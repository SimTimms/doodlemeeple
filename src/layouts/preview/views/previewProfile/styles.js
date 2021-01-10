import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  card: { width: '100%' },
  header: {
    minHeight: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  profileWrapper: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: 300,
    maxHeight: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    minWidth: 140,
    maxWidth: 140,
    minHeight: 140,
    maxHeight: 140,
    backgroundSize: 'cover',
    backgroundPosition: `center center`,
    borderRadius: 20,
    border: '4px solid #fff',
    boxShadow: '0 0 30px rgba(0,0,0,0.2)',
  },
  socialIcon: { height: 40 },
}));
