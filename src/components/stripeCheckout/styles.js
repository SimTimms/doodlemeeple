import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
    marginTop: 30,
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    border: `4px solid ${theme.palette.secondary.main}`,
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
}));
