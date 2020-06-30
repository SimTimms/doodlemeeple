import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { timeDifferenceForDate } from '../../../../../../utils/dates';
import {
  IconTitle,
  InlineHeader,
  IconButton,
  FeatureCard,
} from '../../../../../../components';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

export function Posts({ posts }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div
      className={clsx({
        [classes.messageWrapper]: !mobile,
        [classes.messageWrapperMobile]: mobile,
      })}
    >
      <Typography
        color="textPrimary"
        variant="h2"
        style={{ textAlign: 'center' }}
      >
        News
      </Typography>

      {posts.map((post, index) => {
        const regex = /(<([^>]+)>)/gi;
        const linkTo = post.link;
        const createdAt = post.date;
        const message = post.excerpt.rendered
          .replace(regex, '')
          .replace(/&#8217;/gi, "'")
          .replace(/&amp;/gi, '&')
          .replace(/\[&hellip;\]/gi, '...');
        const title = post.title.rendered;
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;

        console.log(post);
        return (
          <FeatureCard
            key={`news_${index}`}
            background={media}
            thumbnail="news"
            title={title}
            subtitle={message}
            buttonOne={
              <a
                href={linkTo}
                className={classes.messageButton}
                style={{ textDecoration: 'none' }}
              >
                <IconButton
                  disabled={false}
                  onClickEvent={false}
                  icon="more_horiz"
                  title="Read more"
                  color="text-dark"
                  type="button"
                  styleOverride={null}
                />
              </a>
            }
            buttonTwo={null}
          />
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
