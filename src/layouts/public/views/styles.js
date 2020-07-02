import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 312,
    padding: 30,
    minWidth: 312,
    boxShadow: '0 0 60px rgba(0,0,0,1)',
    margin: '80px 0 80px 0',
  },
  cardMobile: {
    margin: 0,
    padding: 30,
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: '100%',
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    zIndex: 2,
    position: 'relative',
  },
  description: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
    flexDirection: 'column',
  },
}));
