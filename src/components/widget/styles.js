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
    marginTop: 10,
    marginBottom: 30,
    background: '#fbfbf8',
    padding: 30,
    boxSizing: 'border-box',
    borderRadius: 5,
  },
}));
