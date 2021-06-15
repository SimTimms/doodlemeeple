import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 140;

export const useStyles = makeStyles((theme) => ({
  menuWrapperMobile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  button: {
    background: 'none',
    color: 'rgba(255,255,255,0.4)',
    height: 28,
    margin: 5,
    padding: '0 ',
    fontSize: 12,
    fontWeight: 400,
    border: 'none',
  },
}));
