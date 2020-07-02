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
  },
  descriptionTitle: {
    textAlign: 'center',
    width: '100%',
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  headerLine: {
    borderTop: `2px dashed #ddd`,
    width: '100%',
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
  },
  columnWrapper: {
    maxWidth: 600,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10,
    flexDirection: 'column',
  },
  columnWrapperFull: { width: '100%', maxWidth: 2000 },
}));
