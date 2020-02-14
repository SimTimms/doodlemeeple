import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  dashboardGrid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
    '&:first-child': {
      marginLeft: 0,
    },
  },
});
