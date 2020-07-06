import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    boxSizing: 'border-box',
  },
}));
