import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  createMessage: {
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
    background: '#fff',
    marginTop: 10,
    position: 'fixed',
    bottom: 0,
    left: 0,
    paddingLeft: 140,
    borderRadius: 0,
  },
  createMessageMobile: {
    paddingLeft: 0,
  },
  cardGrid: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 120,
  },
}));
