import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    background: '#7163b7;',
    boxShadow: '3px 3px 6px rgba(0,0,0,0.2)',
    padding: 5,
    boxSizing: 'border-box',
    borderRadius: '50%',
  },
  disabled: { background: '#aaa', boxShadow: 'none' },
  icon: { fontSize: '1rem', color: '#fff' },
}));
