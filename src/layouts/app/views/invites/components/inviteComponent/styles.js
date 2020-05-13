import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    margin: 20,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#fff',
    minHeight: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '20px 20px 20px rgba(0,0,0,0.2)',
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
    background: 'rgba(255,255,255,0.9)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  cardSummaryWrapper: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#fff',
    width: '100%',
    boxSizing: 'border-box',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  cardEmpty: {
    width: '30%',
    margin: '20px auto 20px 0',
    minWidth: 300,
    background: '#ddd',
  },
  cardActionArea: {
    display: 'flex',
    padding: 5,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    width: '100%',
    borderTop: '1px dotted #ddd',
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
