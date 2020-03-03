import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { timeDifferenceForDate } from '../../../../../../utils/dates';
import axios from 'axios';

export function Posts({ posts }) {
  const classes = useStyles();

  return (
    <div className={classes.messageWrapper}>
      <Typography
        color="textPrimary"
        component="p"
        style={{ textAlign: 'center' }}
      >
        Updates
      </Typography>

      {posts.map((post, index) => {
        const regex = /(<([^>]+)>)/gi;
        const linkTo = post.link;
        const icon = '';
        const createdAt = post.date;
        const message = post.excerpt.rendered.replace(regex, '');
        const title = post.title.rendered;
        const media = post._embedded['wp:featuredmedia']['0'].source_url;

        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <a
                href={linkTo}
                className={classes.messageButton}
                style={{ textDecoration: 'none' }}
              >
                <div className={classes.notifications}>
                  <img src={media} alt="new" style={{ maxWidth: 200 }} />
                </div>
                <div className={classes.profileWrapper}>
                  <div className={classes.wrapperOne}>
                    <div className={classes.messageDetails}>
                      <div
                        className={classes.rowWrapper}
                        style={{ justifyContent: 'space-between' }}
                      >
                        <Typography
                          color="secondary"
                          variant="caption"
                          component="p"
                        >
                          <b>{title}</b>
                        </Typography>
                        <Typography
                          variant="caption"
                          component="p"
                          color="textPrimary"
                        >
                          <b>{timeDifferenceForDate(createdAt)}</b>
                        </Typography>
                      </div>
                      <Typography color="textPrimary" component="p">
                        {message}
                      </Typography>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Card>
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
