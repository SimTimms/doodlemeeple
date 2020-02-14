import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    height: 300,
    paddingBottom: 10,
  },
  profileWrapper: {
    width: '100%',
    background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  profileName: { display: 'flex', flexDirection: 'column', paddingLeft: 10 },
  avatar: {
    borderRadius: '50%',
    width: 140,
    height: 140,
  },
  avatarWrapper: {
    borderRadius: '50%',
    border: '10px solid #fff',
    marginTop: -10,
    marginBottom: -10,
  },
}));
