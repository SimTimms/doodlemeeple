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
  title: {
    fontSize: 14,
  },
  status: {
    background: theme.palette.error.main,
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.error.main,
    padding: 5,
    margin: 5,
    color: '#fff',
    '&:hover': {
      background: theme.palette.error.dark,
    },
  },

  iconButtonNo: {
    cursor: 'pointer',
    background: '#ddd',
    padding: 5,
    margin: 5,
    '&:hover': {
      background: '#ccc',
    },
  },
  iconButtonNoIcon: {
    color: '#444',
  },
  iconButtonIcon: {
    color: '#fff',
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
