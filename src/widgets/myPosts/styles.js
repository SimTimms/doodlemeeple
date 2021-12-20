import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuRoot: { width: '100%' },
  image: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    border: '1px solid #ccc',
  },
  publicIcon: {
    color: '#fff',
    borderRadius: '50%',
    padding: 2,
    cursor: 'pointer',
    background: '#bbb',
  },
  clickable: {
    cursor: 'pointer',
    '&:hover': { background: 'rgba(0,0,0,0.05)' },
  },
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
}));
