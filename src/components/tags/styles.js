import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 0 10px 0',
  },
  tagMain: { position: 'relative', margin: '0 10px 0 0', cursor: 'pointer' },
  tagRemove: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '50%',
    background: '#ddd',
    color: '#fff',
    cursor: 'pointer',
  },
  tagSelect: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '50%',
    background: '#ddd',
    color: '#fff',
    cursor: 'pointer',
  },
  tag: {
    borderRadius: 10,

    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: '10px 20px 10px 20px',
    marginRight: 10,
  },
  tagSelected: {
    borderRadius: 10,
    height: 60,
    background: '#444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: '5px 20px 5px 20px',
    marginRight: 10,
  },
  tagAdd: {
    borderRadius: 10,
    height: 60,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    padding: 5,
  },
}));
