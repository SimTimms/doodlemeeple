import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '../../../../../../components';
import clsx from 'clsx';
import logo from '../../../../../../assets/dm_white.png';
import animalsFG from '../../../../../../assets/animals_fg.png';
import animalsBG from '../../../../../../assets/animals_bg.png';

export function Featured({ posts, history }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div
      className={clsx({
        [classes.messageWrapper]: !mobile,
        [classes.messageWrapperMobile]: mobile,
      })}
    >
      {posts.map((post, index) => {
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;

        return (
          <div className={classes.card} key={`conversation_${index}`}>
            <div className={classes.postImageWrapper}>
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${animalsFG})`,
                  filter: 'saturate(100%)',
                }}
              ></div>{' '}
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${animalsBG})`,
                  filter: 'saturate(100%)',
                }}
              ></div>
              <div className={classes.cover}></div>
              <div className={classes.rowWrapper}>
                <div className={classes.postHeader}>
                  <Typography
                    style={{
                      color: 'rgba(0,0,0,0.6',
                      marginTop: 5,
                      textAlign: 'center',
                      marginBottom: 30,
                    }}
                    component="h5"
                    variant="h5"
                  >
                    Welcome to
                  </Typography>
                  <img src={logo} style={{ maxWidth: 400 }} />

                  <Typography
                    style={{
                      color: 'rgba(0,0,0,0.4)',
                      marginTop: 0,
                      textAlign: 'center',
                    }}
                    component="h6"
                    variant="h6"
                  >
                    Professional Creative Talent
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginTop: 40,
                      fontSize: 20,
                      color: '#fff',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <IconButton
                        color="primary"
                        disabled={false}
                        onClickEvent={() => {
                          history.push('/app/edit-profile');
                        }}
                        icon=""
                        title="Create Profile"
                        styleOverride={null}
                        type="button"
                        iconPos="right"
                      />
                    </div>

                    <div
                      style={{ height: 20, borderLeft: '1px solid #fff' }}
                    ></div>
                    <div
                      style={{
                        display: 'flex',
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <IconButton
                        color="secondary"
                        disabled={false}
                        onClickEvent={() => {
                          history.push('/app/jobs');
                        }}
                        icon=""
                        title="Post a Job"
                        styleOverride={null}
                        iconPos="right"
                        type="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
