import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: { margin: 10, maxWidth: 712 },
  profileBG: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    margin: '0 10px 0 10px',
  },
  profileStandard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderBottom: '1px solid #ddd',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: '50%',
    border: '10px solid #fff',
    width: 140,
    height: 140,
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    marginRight: 20,
  },
  summaryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  iconWrapper: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  colWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagRemove: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '50%',
    background: '#ddd',
    color: '#222',
    cursor: 'pointer',
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
    background: 'rgba(255,255,255,0.8)',
  },
}));
