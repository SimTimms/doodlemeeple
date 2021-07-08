import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    boxSizing: 'border-box',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    boxSizing: 'border-box',
  },
}));
