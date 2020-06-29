import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
  },
  messageWrapperMobile: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  profileWrapperFeatured: {
    minWidth: 120,
    maxWidth: 120,
    minHeight: 120,
    maxHeight: 120,
    borderRadius: 20,
    marginBottom: 5,
    border: '4px solid #fff',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
  },
  postHeader: {
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottom: 'none',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    paddingTop: 20,
    width: 350,
    boxSizing: 'border-box',
    zIndex: 1,

    height: '100%',
  },
  featuredText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px dotted #aaa',
    width: '100%',
    paddingBottom: 5,
  },
  postHeaderText: {
    color: '#fff',
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 34,
    textTransform: 'uppercase',
  },
  postImage: {
    position: 'absolute',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: 300,
  },
  postImageWrapper: {
    position: 'relative',
    width: '100%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 0,
    position: 'relative',
    boxShadow: '5px 5px 30px rgba(0,0,0,0.3)',
  },
  cover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapperOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  messageDetails: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },
  messageButton: {
    width: '100%',
    lineHeight: 0.6,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
}));
