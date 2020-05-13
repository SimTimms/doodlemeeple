import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    background: theme.palette.primary.main,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    boxSizing: 'border-box',
  },
}));
