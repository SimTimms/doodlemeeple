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
  icon: {
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    borderRadius: '50%',
    border: '2px solid #ddd',
    marginLeft: 2,
    marginRight: 2,
  },
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationsOther: {
    borderLeft: '1px solid #ddd',
    borderRight: 'none',
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
    lineHeight: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  card: { margin: '5px auto 0 0', boxShadow: '3px 3px 10px rgba(0,0,0,0.2)' },
  cardMobile: {
    margin: '5px auto 0 0',
    width: '90%',
  },
  cardOther: {
    margin: '5px 0 0 auto',
  },
  cardOtherMobile: {
    margin: '5px 0 0 auto',
    width: '90%',
  },
  name: { color: '#aaa' },
  nameOther: { color: theme.palette.primary.light },
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
  },
  wrapperOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
    boxSizing:'border-box'
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
