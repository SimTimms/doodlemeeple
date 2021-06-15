import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles((theme) => ({
  root: { width: '100%', height: '100vh', postion: 'fixed' },
  pageWrapper: {
    width: '100%',
    height: 'calc(100vh - 122px)',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
}));
