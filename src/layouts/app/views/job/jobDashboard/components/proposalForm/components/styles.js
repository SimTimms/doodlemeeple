import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: 'border-box',
  },
  wrapper: { marginRight: 10, marginLeft: 10, width: 70, marginTop: 8 },
}));
