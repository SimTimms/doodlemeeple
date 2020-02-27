import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    paddingBottom: 10,
    position: 'relative',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#ccc',
  },
  rootDesktop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: 100,
    paddingBottom: 0,
  },
  profileWrapperDesktop: {
    display: 'flex',
    flexDirection: 'row',
  },
  profileWrapper: {
    width: '100%',
    background: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileWrapperMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 0,
  },
  profileName: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    textAlign: 'left',
    width: '100%',
  },
  profileNameMobile: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatarWrapper: {
    borderRadius: '50%',
    border: '10px solid #fff',
    backgroundColor: '#ccc',
    marginTop: -10,
    marginBottom: -10,
    width: 140,
    minWidth: 140,
    maxWidth: 140,
    height: 140,
    position: 'relative',
  },
  deleteBGButton: { display: 'none' },
  deleteBGButtonShow: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    background: 'rgba(0,0,0,0.3)',
  },
  deleteAvatarButton: {
    color: '#fff',
    textShadow: '2px 2px 2px rgba(0,0,0,0.4)',
  },
  deleteAvatarWrapper: {
    display: 'none',
  },
  deleteAvatarWrapperShow: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 10,
    width: '100%',

    borderRadius: 70,
  },
  avatarWrapperMobile: {
    marginTop: -70,
  },
  avatar: {
    borderRadius: '50%',
    width: 140,
    height: 140,
  },
}));
