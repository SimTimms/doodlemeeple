import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  sectionWrapperMain: {
    width: '100%',
    padding: 10,
    paddingTop: 10,
    boxSizing: 'border-box',
    border: `1px solid #fff`,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 30,
    paddingBottom: 20,
    boxShadow: '10px 10px 30px rgba(0,0,0,0.2)',
    background: '#fff',
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
    color: theme.palette.primary.main,
  },
}));
