import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  sectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '10px !important',
  },
}));
