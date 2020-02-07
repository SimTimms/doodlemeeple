import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  messageBox: {
    background: '#fff',
    borderRadius: 10,
    boxShadow: '5px 5px 5px rgba(0,0,0,0.1)',
    padding: 10,
    margin: 10,
  },
  messageBoxMe: {
    marginRight: 'auto',
  },
  messageBoxYou: {
    marginLeft: 'auto',
  },
  speakerName: {
    color: '#bbb',
    fontSize: 12,
    marginLeft: 10,
  },
  avatarRounded: {
    borderRadius: '50%',
    border: '3px solid #ddd',
    width: 40,
    height: 40,
  },
  speakerWrapper: {
    marginTop: -20,
    marginLeft: -20,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
