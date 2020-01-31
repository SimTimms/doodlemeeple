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
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    border: '10px solid #fff',
  },
  inviteAdd: {
    width: 80,
    borderRadius: '50%',
    border: '10px solid #fff',
    height: 80,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: 10,
  },
}));
