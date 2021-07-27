import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tabTitle: {
    height: 40,
    width: '100%',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryMenu: {
    backgroundColor: '#fff',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.1)',
  },
  secondaryMenuWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabPageContent: {
    overflow: 'auto',
    height: 'calc(100vh - 100px)',
    width: '100%',
  },
}));
