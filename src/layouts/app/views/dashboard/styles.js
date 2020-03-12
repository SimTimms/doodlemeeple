import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  dashboardGrid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 0,
  },
});
