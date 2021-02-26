import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    noTask: {
      color: theme.palette.primary.main,
      marginTop: 20,
      marginBottom: 20,
    },
  };
});
