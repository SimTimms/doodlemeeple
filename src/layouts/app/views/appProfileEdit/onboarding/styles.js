import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  noticeArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgba(52,190,177,1) 0%, rgba(52,190,177,1) 53%, rgba(39,168,156,1) 100%)',
    padding: '70px 0 70px 0',
    '& h4': { color: '#fff' },
  },
}));
