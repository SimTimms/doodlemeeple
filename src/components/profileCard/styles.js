import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  creativeCard: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #ddd',
    minWidth: 270,
    maxWidth: 270,
    position: 'relative',
    boxShadow: '10px 10px 20px rgba(0,0,0,0.2)',
  },
  creativeCardNoShadow: { boxShadow: 'none' },
  creativeCardWrapper: {
    background: '#fafafa',
    padding: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
  },
  creativeCardDetails: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionsWrapper: {
    display: 'flex',
    padding: 5,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fafafc',
  },
  creativeCardInvited: {
    boxShadow: `0 0 20px ${theme.palette.primary.light}`,
    border: `1px solid ${theme.palette.primary.light}`,
  },
  favIconNull: {
    color: '#ccc',
    fontSize: 20,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    cursor: 'pointer',
    width: 20,
    textAlign: 'center',
  },
  favIcon: {
    color: theme.palette.error.main,
  },
  countIcon: { color: theme.palette.primary.main },
  favIconBad: {
    color: '#de5d5d',
  },
  favIconMed: {
    color: '#f5cd5f',
  },
  favIconGood: {
    color: '#32a88d',
  },
  favIconPrimary: {
    color: theme.palette.primary.main,
  },
  favIconDark: { color: '#ccc' },
  favIconStar: {
    color: '#444',
    fontSize: 12,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    cursor: 'pointer',
  },
  smallActionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    bottom: 0,
    cursor: 'pointer',
  },
  top: { top: 0, borderRadius: '0 0 0 5px' },
  actionText: {
    fontSize: 8,
    fontWeight: 600,
    marginTop: -2,
    color: '#fff',
    width: 20,
    position: 'absolute',
    textAlign: 'center',
  },
  actionTextDark: {
    color: '#fff',
  },
  stripeBoxNull: {
    width: 30,
    background: '#ccc',
    display: 'flex',
    alignItems: 'center',
    padding: '1px 3px 1px 3px',
    borderRadius: 2,
  },
  stripeBox: {
    background: theme.palette.primary.main,
  },
}));
