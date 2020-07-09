import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../assets/smithy.jpg';
import jumping from '../../assets/jumping.jpg';
import purps from '../../assets/dm_cover.jpg';
import dragon from '../../assets/dragon.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {},
  background: {
    backgroundImage: `url(${smithy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    minHeight: 400,
    padding: 10,
  },
  backgroundSignup: {
    backgroundImage: `url(${jumping})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    minHeight: 400,
    padding: 10,
  },
  backgroundWrapper: {
    width: '100%',
    minHeight: 400,
    padding: 10,
    position: 'relative',
  },
  cover: {
    background: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
  },
  backgroundLogin: {
    backgroundImage: `url(${dragon})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    filter: 'grayscale(100%)',
    width: '100%',
    minHeight: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bgOverlay: {
    background: '#fff',
    padding: '20px 10px 20px 10px',
    width: '80%',
    marginBottom: 10,
    marginLeft: '-10px',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    boxShadow: ' 10px 5px 10px rgba(0,0,0,0.4)',
  },
  grid: { display: 'flex', justifyContent: 'space-between', height: '100%' },
  column: { display: 'flex', width: '50%', flexWrap: 'wrap' },
  columnProfile: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  profileName: { marginRight: 10 },
}));
