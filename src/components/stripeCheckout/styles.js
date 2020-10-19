import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 30,
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
    border: `1px dashed #6872e6`,
    borderRadius: 10,
    maxWidth: 500,
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  noerror: {
    color: '#222',
    marginLeft: 20,
    padding: 5,
    borderRadius: 5,
    background: '#fafafa',
  },
  error: {
    background: theme.palette.error.main,
    color: '#fff',
  },
  notify: {
    padding: 5,
    borderRadius: 5,
    background: theme.palette.secondary.main,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
  },
}));
