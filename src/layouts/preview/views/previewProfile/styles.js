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
  shareLink: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
  popup: {
    position: 'fixed',
    zIndex: 100,
    left: 0,
    top: 0,
    background: '#fff',
    height: '100vh',
    overflow: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  catWrapper: {
    minWidth: 100,
    maxWidth: 100,
    minHeight: 100,
    maxHeight: 100,
    backgroundColor: theme.palette.primary.main,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 10,
    border: '2px solid #fff',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': { opacity: 0.8 },
  },
  catWrapperBlank: {
    minWidth: 100,
    maxWidth: 100,
    minHeight: 100,
    maxHeight: 100,
    margin: 10,
    border: '2px solid #fff',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': { opacity: 0.8 },
  },
  catTitle: {
    background: 'rgba(0,0,0,0.7)',
    padding: 5,
    boxSizing: 'borderBox',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 10,
  },
  socialIcon: {
    height: 20,
    marginLeft: 5,
    marginRight: 5,
    cursor: 'pointer',
    border: '2px solid #fff',
    borderRadius: 2,
    boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
  },
}));
