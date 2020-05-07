import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 10,
    marginBottom: 100,
    border: '1px solid #ddd',
  },
  creativeCardWrapper: {
    background: '#fafafa',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',

    borderBottom: '1px solid #ddd',
  },
  creativeCardBackground: {
    minWidth: 80,
    maxWidth: 80,
    minHeight: 80,
    maxHeight: 80,
    borderRadius: '50%',
    border: '5px solid #fff',
  },
  creativeCardDetails: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionsWrapper: {
    display: 'flex',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.8)',
  },
}));
