import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingBottom: 30,
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
  },
  inputWrapperMobile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  actionInputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
  },
  avatarWrapper: {
    background: '#ddd',
    position: 'relative',
    width: 260,
    minWidth: 260,
    maxWidth: 260,
    minHeight: 200,
    maxHeight: 200,
    height: 200,
    padding: 0,
    boxShadow:
      '1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, inset 2px 2px 6px rgba(255,255,255,0.3),10px 10px 20px rgba(0,0,0,0.4)',
    marginRight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  avatarWrapperMobile: {
    marginRight: 0,
  },
});
