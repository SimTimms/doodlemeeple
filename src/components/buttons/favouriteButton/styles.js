import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  smallActionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    bottom: 0,
    cursor: 'pointer',
  },
  top: { top: 0, borderRadius: '0 0 0 5px' },
  favIcon: {
    color: theme.palette.error.main,
  },
  favIconDark: { color: '#ccc' },
  actionText: {
    fontSize: 8,
    fontWeight: 600,
    marginTop: -2,
    color: '#fff',
    width: 20,
    position: 'absolute',
    textAlign: 'center',
  },
  actionTextDark: {
    color: '#fff',
  },
}));
