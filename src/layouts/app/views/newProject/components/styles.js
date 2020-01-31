import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    width: '100%',
    height: 300,
    padding: 10,
  },
  cardMedia: {
    borderRadius: '50%',
    border: '10px solid #fff',
    marginBottom: -50,
  },
  icon: { fontSize: 20, color: '#ddd', position: 'absolute', top: 0, right: 0 },
  galleryIcon: { fontSize: 20, color: '#ddd' },
  galleryWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageIcon: { fontSize: 50, color: '#fff', cursor: 'pointer' },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
