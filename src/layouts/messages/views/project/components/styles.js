import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 300,
    padding: 10,
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    marginTop: -90,
    marginRight: 20,
    borderRadius: '50%',
    border: '10px solid #fff',
  },
  profileNameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  avatar: { borderRadius: '50%' },
}));
