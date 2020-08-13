import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#fff',
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },

  hide: {
    display: 'none',
  },
  fullWidth: { width: '100%' },
  accepted: {
    width: '100%',
    background: theme.palette.secondary.main,
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0 15px 0',
    marginBottom: 20,
  },
  declined: {
    background: theme.palette.error.main,
  },
  wrapper: {
    padding: 20,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  profileWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    background: '#fff',
    borderRadius: 10,
    boxShadow: '10px 10px 30px rgba(0,0,0,0.3)',
  },
  profileWrapperDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileImg: {
    width: 60,
    minWidth: 60,
    borderRadius: '50%',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
    border: '4px solid #fff',
    marginRight: 20,
  },
}));
