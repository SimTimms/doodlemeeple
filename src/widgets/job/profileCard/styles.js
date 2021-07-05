import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #ddd',
    minWidth: 270,
    width: '30%',
    maxWidth: 300,
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
  summary: { paddingBottom: 6, paddingLeft: 10, paddingRight: 10 },
  meta: { fontStyle: 'italic', marginBottom: 6, fontSize: 12 },
}));
