import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
    marginTop: 10,
    color: '#222',
  },
  subTitle: {
    color: '#222',
    fontSize: 20,
    textShadow: '0 0 50px rgba(0,0,0,1)',
    width: '100%',
  },
  descriptionTitle: {
    textAlign: 'center',
    width: '100%',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.dark,
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  headerLine: {
    borderTop: `1px dashed #ddd`,
    width: '100%',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  meta: {
    fontSize: 12,
    color: theme.palette.primary.main,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
  },
  descriptionLink: {
    fontSize: 14,
    marginTop: 10,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  columnWrapper: {
    maxWidth: 600,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    paddingBottom: 30,
    boxSizing: 'border-box',
    flexDirection: 'column',
    background: 'rgba(255,255,255,0.1)',
  },
  columnWrapperFull: { width: '100%', maxWidth: 2000 },
}));
