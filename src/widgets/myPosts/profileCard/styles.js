import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  postCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #ddd',
    position: 'relative',
    boxShadow: '10px 10px 20px rgba(0,0,0,0.2)',
    background: '#fff',
    margin: 5,
    maxWidth: 400,
    width: '100%',
    display: 'flex',
  },
  postCardBG: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 60,
  },
  postCardBGKick: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  postType: {
    height: 28,
    width: 90,
    minWidth: 90,
    borderRadius: '50%',
    padding: 4,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    whiteSpace: 'nowrap',
    marginTop: 10,
  },
  publicIcon: { color: '#fff', borderRadius: '50%', padding: 2 },
  job: {
    background: theme.job,
  },
  jobPrivate: {
    background: theme.jobPrivate,
  },
  kickstarter: {
    background: theme.kickstarter,
  },
  lastOn: {
    background: theme.lastOn,
  },
  game: {
    background: theme.game,
  },
  newUser: {
    background: theme.newUser,
  },
  public: {
    background: theme.public,
  },
  featureImage: { maxWidth: 500 },
  avatar: {
    minWidth: 40,
    maxWidth: 40,
    width: 40,
    minHeight: 40,
    maxHeight: 40,
    height: 40,
    backgroundSize: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    marginLeft: 5,
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 6,
  },
  summary: {
    paddingBottom: 6,
    paddingRight: 5,
    paddingLeft: 5,
    width: '100%',
  },
}));
