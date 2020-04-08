import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  mainHeaderBorder: {
    borderLeft: '20px solid #444',
    height: 5,
    marginRight: 10,
  },
  mainHeaderBorderEnd: {
    width: '100%',
    background: '#444',
    height: 5,
    marginLeft: 10,
  },
  subHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  subHeaderBorder: {
    borderLeft: '20px solid #444',
    height: 5,
    marginRight: 10,
  },
  card: {
    background: 'grey',
    borderRadius: '5px',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.5s',
    willChange: 'transform',
    border: '15px solid white',
  },
  testimonialWrapper: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  testimonialWrapperItem: {
    width: 60,
    height: 60,
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: '3px solid #ddd',
  },
  testimonialSummaryWrapper: {
    borderRadius: 40,
    padding: 15,
    minWidth: 200,
    marginLeft: 10,
  },
  testimonialSummary: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testimonialName: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
}));
