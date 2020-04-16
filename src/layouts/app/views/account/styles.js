import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  card: { maxWidth: 712, width: '100%' },
  title: {
    fontSize: 14,
  },
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
