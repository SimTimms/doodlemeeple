import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 0 10px 0',
  },
  tag: {
    borderRadius: 10,
    height: 60,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: '5px 20px 5px 20px',
    marginRight: 10,
  },
  tagAdd: {
    borderRadius: 10,
    height: 60,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: 5,
  },
}));
