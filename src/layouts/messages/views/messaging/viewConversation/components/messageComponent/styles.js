import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  messageCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconButton: {
    cursor: 'pointer',
  },
  projectImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: 200,
    height: 100,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconInvite: { color: '#fff !important' },
  nextButton: {
    height: '100%',
    width: '100%',
    minWidth: 0,
    background: theme.palette.primary.main,
    padding: 0,
    borderRadius: 0,
    color: '#fff',
  },
  icon: { width: 40 },
  notifications: {
    display: 'flex',
    flexDirection: 'column',

    borderRight: '1px solid #ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationInvite: {
    background: theme.palette.secondary.main,
  },
  projectNotifications: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    borderRight: '1px solid #ddd',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  messageDetails: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  messageButton: {
    width: '100%',
    lineHeight: 0.6,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  card: { width: 350, margin: '5px 0 0 0' },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRight: '1px solid #ddd',
  },
  wrapperOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
    padding: 10,
  },
  avatarResponded: {
    border: `4px solid ${theme.palette.primary.main} !important`,
  },
  avatarDeclined: {
    border: '4px solid #444 !important',
  },
  avatarRounded: {
    borderRadius: '50%',
    border: '3px solid #ddd',
    width: 60,
    minWidth: 60,
    height: 60,
  },
}));
