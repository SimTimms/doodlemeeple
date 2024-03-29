import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
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
    maxWidth: 650,
    width: '100%',
    boxSizing: 'border-box',
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
    color: '#222',
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 34,
  },
  postImageWrapper: {
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  postImage: {
    position: 'absolute',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: 200,
  },
  postImageLogo: {
    width: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: 100,
    position: 'absolute',
    margin: 'auto',
  },
  card: {
    width: '100%',
    borderRadius: 0,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    background: 'rgba(255,255,255,0)',
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
    lineHeight: 1,
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
