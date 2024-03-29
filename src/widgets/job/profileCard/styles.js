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
    position: 'relative',
    boxShadow: '10px 10px 20px rgba(0,0,0,0.2)',
    background: '#fff',
  },
  jobName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  external: {
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '50%',
    paddingTop: 3,
    paddingBottom: 3,
    maxWidth: 24,
    height: 24,
  },
  externalDm: {
    color: '#fff',
    borderRadius: '50%',
    paddingTop: 10,
    boxSizing: 'border-box',
    maxWidth: 24,
    minWidth: 24,
    maxHeight: 24,
    minHeight: 24,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 6,
    marginTop: 6,
  },
  summary: { paddingBottom: 6 },
  meta: { fontStyle: 'italic', marginBottom: 6, fontSize: 12 },
}));
