import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  sectionWrapperMain: {
    width: '100%',
    padding: 20,
    paddingTop: 10,
    boxSizing: 'border-box',
    border: `1px solid #fff`,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 30,
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  actionWrapperHeader: {
    background: '#efeff5',
    color: theme.palette.primary.main,
  },
}));
