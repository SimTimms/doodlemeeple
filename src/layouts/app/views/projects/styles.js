import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardGrid: {
    width: '100%',
    maxWidth: 1024,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));
