import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: { width: '100%' },
  fullWidth: { width: '100%' },
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    background: '#fff',
  },
  profileImg: {
    width: 60,
    minWidth: 60,
    borderRadius: '50%',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
    border: '4px solid #fff',
    marginRight: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    borderTop: '1px dotted #ddd',
    borderBottom: '1px dotted #ddd',
    marginTop: 5,
    '&:first-child': {
      borderTop: 'none',
    },
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderTop: '1px dotted #ddd',
  },
  profileWrapperDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
}));
