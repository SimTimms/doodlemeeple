import { makeStyles } from '@material-ui/core/styles';
import smithy from '../../../../assets/smithy.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 50,
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    borderRadius: '50%',
    border: '10px solid #fff',
    width: 140,
  },
  iconButton: {
    width: 52,
    height: 52,
    backgroundSize: '30px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 4px',
    borderRadius: 3,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    border: '1px dotted #fff',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  iconButtonOn: { border: `1px dashed ${theme.palette.primary.main}` },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  noticeArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgba(52,190,177,1) 0%, rgba(52,190,177,1) 53%, rgba(39,168,156,1) 100%)',
    '& h4': { color: '#fff' },
  },
  socialIcon: {
    width: 30,
    border: '1px solid #ccc',
    borderRadius: '50%',
    marginRight: 10,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${smithy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 300,
    padding: 10,
  },
}));
