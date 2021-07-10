import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  divider: {
    width: '90%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 14,
    marginTop: 14,
  },
  summary: { paddingBottom: 6, paddingLeft: 10, paddingRight: 10 },
  title: {
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
  },
  avatar: { borderRadius: '50%', width: 30, height: 30, marginLeft: 10 },
}));
