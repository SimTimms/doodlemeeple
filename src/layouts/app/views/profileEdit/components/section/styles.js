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
  sectionHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottom: `10px solid ${theme.palette.secondary.main}`,
    paddingBottom: 10,
    width: '100%',
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
}));
