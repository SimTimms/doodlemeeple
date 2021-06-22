import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 160;

export const useStyles = makeStyles((theme) => ({
  root: { height: '100vh', background: '#efeff5' },
  content: {
    flexGrow: 1,
    marginLeft: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    background: '#efeff5',
  },
  contentMobile: { width: '100%', marginLeft: 0 },
}));
