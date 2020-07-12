import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '../../../../../../components';
import clsx from 'clsx';

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
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.postImageWrapper}>
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${media})`,
                  filter: 'brightness(200%) saturate(136%)',
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
                    }}
                    component="h6"
                    variant="h6"
                  >
                    Welcome to
                  </Typography>
                  <Typography
                    style={{
                      color: '#111',
                      marginTop: 5,
                      textAlign: 'center',
                      fontSize: 60,
                    }}
                    component="h1"
                    variant="h1"
                  >
                    <span style={{ fontWeight: 900 }}>doodle</span>
                    <span>meeple</span>
                  </Typography>
                  <Typography
                    style={{
                      color: 'rgba(0,0,0,0.8)',
                      marginTop: 5,
                      textAlign: 'center',
                    }}
                    component="h4"
                    variant="h4"
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
                        color="text-dark"
                        disabled={true}
                        onClickEvent={() => {
                          history.push('/app/jobs');
                        }}
                        icon=""
                        title="Post Job (Coming Soon)"
                        styleOverride={{ background: 'none' }}
                        iconPos="right"
                        type="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
