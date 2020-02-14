import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',

    width: '100%',
    height: 300,
    paddingBottom: 10,
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
  },
  profileNameMobile: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatarWrapper: {
    borderRadius: '50%',
    border: '10px solid #fff',
    marginTop: -10,
    marginBottom: -10,
    width: 140,
    height: 140,
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
