import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  actionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
}));