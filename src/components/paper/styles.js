import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
    background: '#fbfbf8',
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
    padding: 30,
    boxSizing: 'border-box',
  },
}));
