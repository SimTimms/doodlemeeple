import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  profileWrapperFeatured: {
    minWidth: 50,
    maxWidth: 50,
    minHeight: 50,
    maxHeight: 50,
    borderRadius: '50%',
    border: '4px solid #fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    marginRight: 20,
  },
  postHeader: {
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottom: 'none',
    width: '100%',
    boxSizing: 'border-box',
    zIndex: 1,
  },
  meta: {
    fontSize: 12,
    color: theme.palette.primary.main,
  },
  postHeaderText: {
    color: '#222',
    height: '100%',
    alignSelf: 'flex-start',
    display: 'flex',
    textAlign: 'left',
  },
  card: {
    width: '100%',
    borderRadius: 0,
    position: 'relative',
    borderBottom: '1px dotted #ccc',
    padding: 20,
    boxSizing: 'border-box',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
}));
