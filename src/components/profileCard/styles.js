import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 10,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    border: '1px solid #ddd',
    minWidth: 270,
    maxWidth: 270,
    minHeight: 300,
    maxHeight: 300,
  },
  creativeCardWrapper: {
    background: '#fafafa',
    padding: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.8)',
  },
}));
