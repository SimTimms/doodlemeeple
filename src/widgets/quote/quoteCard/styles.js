import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 10,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #ddd',
    maxWidth: 500,
    width: '100%',
    position: 'relative',
    boxShadow: '10px 10px 20px rgba(0,0,0,0.2)',
    background: '#fff',
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 6,
    marginTop: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'left',
  },
  summary: {
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left',
  },
  meta: {
    fontStyle: 'italic',
    marginBottom: 6,
    fontSize: 12,
    textDecoration: 'none',
    color: '#222',
  },
  error: {
    fontStyle: 'italic',
    marginBottom: 6,
    fontSize: 12,
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  dull: {
    color: '#fff',
    background: theme.palette.primary.dark,
    padding: 3,
    borderRadius: 2,
    marginTop: 3,
  },
  red: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
  profileThumb: {
    backgroundColor: '#ddd',
    backgroundSize: 'cover',
    border: '2px solid #ddd',
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  unseen: { border: `2px solid ${theme.palette.secondary.main}` },
}));
