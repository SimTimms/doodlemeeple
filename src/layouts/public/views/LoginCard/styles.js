import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
  card: {
    margin: 10,
    maxWidth: 512,

    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 10,
  },

  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
});
