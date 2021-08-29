import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    background: '#fff',
    border: '3px solid #efeff5;',
  },
  imageThumb: {
    minHeight: 54,
    width: '20%',
    marginLeft: 2,
    marginRight: 2,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  socialImg: { width: '100%', height: '100%' },
  social: {
    textDecoration: 'none',
    maxHeight: 20,
    minHeight: 20,
    maxWidth: 20,
    minWidth: 20,
    borderRadius: '50%',
    overflow: 'hidden',
    border: '1px solid #fff',
    margin: 5,
    boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
    background: '#fff',
  },
  website: {
    textDecoration: 'underline',
    color: '#222',
    textAlign: 'center',
    fontSize: 12,
    marginRight: 10,
  },
  email: {
    textDecoration: 'none',
    width: '100%',
    fontSize: 12,
    color: theme.palette.primary.main,
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #ddd',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 6,
  },
  summary: { paddingBottom: 6, height: 40, paddingLeft: 10, paddingRight: 10 },
  types: { fontStyle: 'italic', fontSize: 12 },
}));
