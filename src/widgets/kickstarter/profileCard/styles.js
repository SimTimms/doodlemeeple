import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 3,
    border: '1px solid #ddd',
    position: 'relative',
    background: '#fff',
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 6,
  },
  summary: { paddingBottom: 6, paddingLeft: 10, paddingRight: 10 },
}));
