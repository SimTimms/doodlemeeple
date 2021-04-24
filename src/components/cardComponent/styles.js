import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    marginBottom: 5,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: theme.palette.wrap.main,
    border: theme.palette.wrap.light,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    boxShadow: 'none',
    boxSizing: 'border-box',
    color: theme.palette.wrap.text,
  },
  cardLocked: {
    padding: 0,
    background: 'rgba(255,255,255,0.2)',
    border: `1px solid #fff`,
  },
  cardTitle: { width: '100%' },
  cardTitleLocked: { padding: 10 },
  clickable: {
    cursor: 'pointer',
    '&:hover': { boxShadow: '5px 5px 10px rgba(0,0,0,0.1)' },
  },
  locked: {
    color: '#fff',
    borderRadius: '3px 0 0 3px',
    padding: 4,
  },
  cardMobile: { width: '100%' },
}));
