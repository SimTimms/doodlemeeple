import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 2,
    background: '#7163b7;',
    boxShadow: '3px 3px 6px rgba(0,0,0,0.2)',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  delete: { background: theme.palette.error.main },
  title: {
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  },
  titleWithIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleIcon: {
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    marginRight: 5,
  },
  icon: { fontSize: '1rem' },
  circle: {
    background: theme.palette.secondary.main,
    borderRadius: '4px 0 0 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginRight: 10,
    height: 26,
    width: 26,
  },
  ml: { marginLeft: 10 },
  mr: { marginRight: 10 },
  mb: { marginBottom: 10 },
  mt: { marginTop: 10 },
}));
