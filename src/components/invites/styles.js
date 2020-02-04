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
    width: 60,
    height: 60,
    borderRadius: '50%',
    margin: '0 10px 0 10px',
  },
  inviteMain: { position: 'relative', margin: '0 10px 0 0' },
  inviteAdd: {
    width: 60,
    borderRadius: '50%',
    height: 60,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: 10,
  },
  inviteRemove: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '50%',
    background: '#ddd',
    color: '#fff',
  },
}));
