import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    width: '30%',
    margin: '20px auto 20px 0',
    minWidth: 300,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#ddd',
    height: 390,
  },
  cardSummary: { height: 80, overflow: 'hidden' },
  cardEmpty: {
    width: '30%',
    margin: '20px auto 20px 0',
    minWidth: 300,
    background: '#ddd',
  },
  cardDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    background: 'rgba(255,255,255,0.8)',
    margin: '180px 0 0px 0',
  },
  cardMedia: { borderRadius: '50%', border: '10px solid #ddd', width: 140 },
  cardLink: {
    lineHeight: 0.6,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
  },
  flexCenter: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
  },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));
