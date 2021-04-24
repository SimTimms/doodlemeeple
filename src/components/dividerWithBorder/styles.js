import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    borderTop: `1px dotted ${theme.palette.primary.light}`,
  },
}));
