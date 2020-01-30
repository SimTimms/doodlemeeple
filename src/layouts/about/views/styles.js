import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
  card: { margin: 10, maxWidth: 512 },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
});
