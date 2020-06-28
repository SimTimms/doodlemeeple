import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
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
        const regex = /(<([^>]+)>)/gi;
        const linkTo = post.link;
        const message = post.excerpt.rendered
          .replace(regex, '')
          .replace(/&#8217;/gi, "'")
          .replace(/&amp;/gi, '&')
          .replace(/\[&hellip;\]/gi, '...');
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
                }}
              ></div>
              <div className={classes.cover}></div>
              <div className={classes.rowWrapper}>
                <div className={classes.postHeader}>
                  <Typography
                    style={{
                      color: 'rgba(255,255,255,0.6',
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
                      color: '#fff',
                      marginTop: 5,
                      textAlign: 'center',
                      fontSize: 60,
                    }}
                    component="h1"
                    variant="h1"
                  >
                    doodle meeple
                  </Typography>
                  <Typography
                    style={{
                      color: 'rgba(255,255,255,0.8',
                      marginTop: 5,
                      textAlign: 'center',
                    }}
                    component="h4"
                    variant="h4"
                  >
                    Tagline here, tagline here
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginTop: 40,
                      maxWidth: 320,
                      fontSize: 20,
                      color: '#fff',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      color="text-white"
                      disabled={false}
                      onClickEvent={() => {}}
                      icon=""
                      title="Create Profile"
                      styleOverride={null}
                      type="button"
                    />
                    <div
                      style={{ height: 20, borderLeft: '1px solid #fff' }}
                    ></div>
                    <a href={linkTo} target="_blank" rel="noopener noreferrer">
                      <IconButton
                        color="text-white"
                        disabled={false}
                        onClickEvent={() => {}}
                        icon=""
                        title="Post a Job"
                        styleOverride={null}
                        type="button"
                      />
                    </a>
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
