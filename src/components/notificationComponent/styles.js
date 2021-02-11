import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: 'pointer',
    '&:hover': {
      color: '#222',
    },
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: { paddingLeft: 10, paddingRight: 10, fontSize: 14 },
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#444',
    borderRadius: '50%',
    minHeight: 30,
    maxHeight: 30,
    minWidth: 30,
    maxWidth: 30,
    marginLeft: 10,
    textShadow: ' 1px 1px 3px rgba(0,0,0,0.1)',
  },

  notificationNeutral: {
    fontSize: 12,
  },
  notificationGood: {
    color: theme.palette.secondary.main,
  },
  notificationBad: {
    color: theme.palette.error.main,
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    margin: 0,
    borderRadius: 0,
    boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
    marginBottom: 5,
    background: '#fff',
    borderRadius: 4,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
  },
}));
