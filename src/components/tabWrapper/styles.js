import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  actionWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    background: theme.palette.primary.dark,
  },
}));
