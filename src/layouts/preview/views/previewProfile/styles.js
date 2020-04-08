import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../../../assets/smithy.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    maxWidth: 824,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  card: { width: '100%' },
  header: {
    minHeight: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
}));
