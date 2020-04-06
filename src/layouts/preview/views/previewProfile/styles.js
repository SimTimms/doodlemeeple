import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../../../assets/smithy.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  card: { width: '100%' },
  header: {
    minHeight: 400,
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
