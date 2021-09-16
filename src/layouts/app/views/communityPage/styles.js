import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    background: theme.palette.primary.dark,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  primaryMenuWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    background: theme.palette.primary.dark,
    zIndex: 1,
    height: 68,
    borderBottom: '1px solid rgba(255,255,255,0.15)',
  },
  desktop: { display: 'flex', flexDirection: 'column' },
  mobile: { width: '100%' },
  mainTitle: { fontSize: '1.2rem', color: theme.palette.primary.dark },
  gridThree: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '100%',
  },
  gridOne: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
  },
  gridTwo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr ',
    width: '100%',
  },
  gridFour: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr ',
    width: '100%',
  },
  title: { fontWeight: 'bold' },
}));
