import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginBottom: 100,
  },
  card: { maxWidth: 712, width: '100%', marginTop: 10 },
  title: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionTitle: { fontSize: 30, marginTop: 20 },
  description: {
    fontSize: 16,
    marginTop: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
  },
  info: {
    background: theme.palette.secondary.main,
    color: '#fff',
    padding: 20,
    width: '100%',
    textTransform: 'uppercase',
    boxSizing: 'border-box',
  },
  subTitle: {
    color: theme.palette.secondary.main,
    fontSize: 20,
  },
  error: { background: theme.palette.error.main, color: '#fff', padding: 5 },
  avatar: {
    borderRadius: '50%',
    border: '10px solid #fff',
    marginBottom: -50,
    width: 140,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 300,
    padding: 10,
  },
}));
