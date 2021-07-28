import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    cursor: 'pointer',
    marginRight: 20,
    background: theme.palette.secondary.main,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  },
  icon: { fontSize: '1rem' },
  circle: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginRight: 10,
  },
}));
