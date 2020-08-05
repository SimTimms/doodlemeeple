import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: 60,
    paddingBottom: 60,
  },
  createWrapper: {
    padding: 20,
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
    background: '#fff',
    borderRadius: '10px 10px 0 0',
    marginTop: 10,
    position: 'fixed',
    bottom: 0,
    left: 0,
    paddingLeft: 80,
    paddingRight: 80,
  },
  participant: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    background: '#fff',
    margin: 3,
    borderRadius: 4,
    padding: 3,
    paddingRight: 10,
    border: '1px solid #eee',
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
    paddingBottom: 60,
  },
}));
