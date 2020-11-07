import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    background: theme.palette.primary.dark,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  desktop: { display: 'flex', flexDirection: 'column' },
  mobile: { width: '100%' },
}));
