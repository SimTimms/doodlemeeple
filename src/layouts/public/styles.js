import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../assets/smithy.jpg';
import jumping from '../../assets/jumping.jpg';
import purps from '../../assets/forestgiant.jpg';

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
  backgroundLogin: {
    backgroundImage: `url(${purps})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    width: '100%',
    minHeight: 400,
    padding: 10,
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
