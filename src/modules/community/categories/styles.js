import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  panelButton: {
    background: theme.palette.primary.main,
    width: '100%',

    boxSizing: 'border-box',
  },
}));
