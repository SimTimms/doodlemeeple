import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    noTask: {
      color: theme.palette.primary.main,
      marginBottom: 10,
      fontSize: 10,
    },
  };
});
