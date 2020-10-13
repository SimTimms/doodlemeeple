import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: { color: '#222' },
  titleLine: {
    height: 2,
    borderTop: `2px dotted #efeff5`,
  },
}));
