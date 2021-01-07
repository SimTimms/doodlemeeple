import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
