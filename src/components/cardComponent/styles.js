import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    marginBottom: 5,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#fff',
    border: `2px solid #fff`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    boxShadow: 'none',
    boxSizing: 'border-box',
  },
  clickable: {
    cursor: 'pointer',
    '&:hover': { boxShadow: '5px 5px 10px rgba(0,0,0,0.1)' },
  },
}));
