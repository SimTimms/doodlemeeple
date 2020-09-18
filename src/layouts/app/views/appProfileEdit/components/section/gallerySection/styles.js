import { makeStyles } from '@material-ui/core/styles';

export const galleryStyles = makeStyles((theme) => ({
  notify: {
    width: '100%',
    textAlign: 'center',
    color: '#aaa',
    padding: 20,
  },
  sectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '10px !important',
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
  },
  headerLeft: {
    color: theme.palette.primary.main,
    marginTop: 20,
  },

  deleteSection: { opacity: 0.3 },
}));
