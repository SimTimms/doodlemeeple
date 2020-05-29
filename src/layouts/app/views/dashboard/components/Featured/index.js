import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '../../../../../../components';
import clsx from 'clsx';

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
                    <Typography
                      variant="h5"
                      component="h4"
                      className={classes.featuredText}
                    >
                      Featured Artist
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h4"
                      className={classes.postHeaderText}
                    >
                      <b>{title}</b>
                    </Typography>
                  </div>

                  <Typography style={{ color: '#444' }} component="p">
                    {message}
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      borderTop: '1px dotted #ccc',
                      marginTop: 10,
                    }}
                  >
                    <a
                      href={linkTo}
                      className={classes.messageButton}
                      style={{
                        textDecoration: 'none',
                        width: 100,
                      }}
                    >
                      <IconButton
                        secondaryColor={true}
                        disabled={false}
                        onClickEvent={null}
                        icon="article"
                        title="Article"
                      />
                    </a>
                    <IconButton
                      secondaryColor={false}
                      disabled={false}
                      onClickEvent={() => {
                        history.push(`/public-preview/${featuredId}`);
                      }}
                      icon="portrait"
                      title="Profile"
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
