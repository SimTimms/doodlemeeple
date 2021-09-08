import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    background: theme.palette.primary.dark,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    boxSizing: 'border-box',
  },
  rootWarning: {
    textAlign: 'right',
    background: theme.palette.primary.main,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    boxSizing: 'border-box',
  },
}));
