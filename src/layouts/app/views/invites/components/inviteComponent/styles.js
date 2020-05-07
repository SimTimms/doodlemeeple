import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    margin: 20,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#fff',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gameImg: { width: 180, height: '100%' },
  cardContentCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    width: '100%',
    height: '100%',
    paddingBottom: 20,
  },
  cardSummary: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    wrap: 'nowrap',
  },
  cardEmpty: {
    width: '30%',
    margin: '20px auto 20px 0',
    minWidth: 300,
    background: '#ddd',
  },

  cardMedia: { borderRadius: '50%', border: '10px solid #ddd', width: 140 },
  cardLink: {
    lineHeight: 0.6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    textDecoration: 'none',
    marginRight: 10,
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
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));
