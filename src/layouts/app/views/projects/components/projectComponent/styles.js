import { makeStyles } from '@material-ui/core/styles';
import smithy from 'src/assets/smithy.jpg';

export const useStyles = makeStyles(theme => ({
  card: {
    width: '30%',
    margin: '20px auto 20px 0',
    minWidth: 300,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  cardDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    background: '#fff',
    margin: '180px 0 0px 0',
  },
  cardMedia: { borderRadius: '50%', border: '10px solid #ddd', width: 140 },
  cardLink: { lineHeight: 0.6 },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));
