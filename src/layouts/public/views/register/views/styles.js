import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  description: {
    padding: 10,
  },
  card: { margin: 10, maxWidth: 512, paddingLeft: 30, paddingRight: 30 },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
});
