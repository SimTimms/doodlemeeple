import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  sectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '10px !important',
  },

  card: {
    background: 'grey',
    borderRadius: '5px',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.5s',
    willChange: 'transform',
    border: '15px solid white',
  },

  testimonialWrapper: {
    background: '#ddd',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: 10,
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  sectionHeaderTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  headerLeft: {
    color: theme.palette.primary.main,
    marginTop: 20,
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
}));
