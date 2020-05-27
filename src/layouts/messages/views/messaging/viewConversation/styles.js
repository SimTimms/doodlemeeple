import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    maxWidth: 424,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
