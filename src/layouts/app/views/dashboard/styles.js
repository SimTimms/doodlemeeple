import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dashboardGrid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 200,
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
  column: { width: '50%', paddingRight: 20, boxSizing: 'border-box' },
  columnRight: { width: '50%', paddingLeft: 20, boxSizing: 'border-box' },
  columnMobile: { width: '100%', padding: 0 },
  dashboardHeader: {
    color: '#444',
    padding: 10,
    paddingTop: 50,
    boxSizing: 'border-box',
    fontWeight: 200,
  },
  right: { textAlign: 'right', width: '100%' },
  dashboardHeaderMobile: { textAlign: 'center' },
}));
