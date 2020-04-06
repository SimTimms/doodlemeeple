import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../../../assets/smithy.jpg';

export const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'opacity',
  },
  root: {
    paddingTop: 10,
    maxWidth: 824,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  card: { width: '100%' },
  header: {
    minHeight: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },

  title: {
    fontSize: 14,
  },
  avatar: {
    borderRadius: '50%',
    border: '10px solid #fff',
    marginBottom: -50,
    width: 140,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${smithy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 300,
    padding: 10,
  },
}));
