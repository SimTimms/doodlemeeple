import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  noticeArea: {
    width: '100%',
    display: 'flex',
    minHeight: 'calc(100vh - 104px)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgba(52,190,177,1) 0%, rgba(52,190,177,1) 53%, rgba(39,168,156,1) 100%)',
    '& h4': { color: '#fff' },
  },
  iconButton: {
    cursor: 'pointer',
    background: theme.palette.primary.main,
    padding: 5,
    margin: 5,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  gameBox: {
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    border: '1px solid #ddd',
  },
  gameBoxSelected: {
    boxShadow: '10px 10px 10px rgb(0,0,0,0.2)',
    border: '1px solid #444',
    cursor: 'pointer',
  },
  gameBoxBG: {
    backgroundSize: 'cover',
    width: 160,
    height: 90,
    display: 'flex',
    alignItems: 'flex-end',
    opacity: 0.8,
  },
  gameBoxSelectedBG: {
    opacity: 1,
  },
  iconButtonIcon: {
    color: '#fff',
    marginleft: 10,
  },
  card: { maxWidth: 712, width: '100%', marginBottom: 20, paddingBottom: 10 },
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
  error: { background: theme.palette.primary.main, color: '#fff', padding: 5 },
}));
