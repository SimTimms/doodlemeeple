import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '../../../../../../components';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { PROFILE_FEATURED } from '../../../../../../data/queries';
import device from '../../../../../../assets/device.svg';

export function Featured({ posts, featuredId, history }) {
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
        const regex = /(<([^>]+)>)/gi;
        const linkTo = post.link;
        const message = post.excerpt.rendered
          .replace(regex, '')
          .replace(/&#8217;/gi, "'")
          .replace(/&amp;/gi, '&')
          .replace(/\[&hellip;\]/gi, '...');
        const title = post.title.rendered;
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;

        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <div
                className={classes.postImage}
                style={{ backgroundImage: `url(${media})` }}
              >
                <div className={classes.postHeader}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div className={classes.featuredText}>
                      <img
                        src={device}
                        style={{ width: 20, marginRight: 10 }}
                        alt=""
                      />
                      <Typography
                        variant="body1"
                        component="h4"
                        style={{ color: 'rgba(255,255,255,0.6)' }}
                      >
                        Recommended
                      </Typography>
                    </div>

                    <Typography
                      variant="h5"
                      component="h4"
                      className={classes.postHeaderText}
                    >
                      <Query
                        query={PROFILE_FEATURED}
                        variables={{ userId: featuredId }}
                        fetchPolicy="network-only"
                      >
                        {({ data }) => {
                          return data ? (
                            <img
                              className={classes.profileWrapperFeatured}
                              src={data.profilePreview.profileImg}
                              alt=""
                            />
                          ) : null;
                        }}
                      </Query>
                      <b>{title}</b>
                    </Typography>
                  </div>

                  <Typography
                    style={{
                      color: '#fff',
                      marginTop: 20,
                      textAlign: 'center',
                    }}
                    component="p"
                  >
                    {message}
                    <a
                      href={linkTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 100,
                        color: '#fff',
                      }}
                    >
                      Read our interview
                    </a>
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}
                  >
                    <IconButton
                      color="primary"
                      disabled={false}
                      onClickEvent={() => {
                        history.push(`/public-preview/${featuredId}`);
                      }}
                      icon="portrait"
                      title="Profile"
                      styleOverride={null}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
