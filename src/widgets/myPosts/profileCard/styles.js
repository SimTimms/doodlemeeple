import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  postCard: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #ddd',
    position: 'relative',
    boxShadow: '10px 10px 20px rgba(0,0,0,0.2)',
    background: '#fff',
    margin: 5,
  },
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
  summary: { paddingBottom: 6, paddingRight: 10 },
}));
