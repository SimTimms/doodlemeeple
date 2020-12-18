import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import {
  IconButton,
  FeatureCardHorizontal,
} from '../../../../../../components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { timeDifferenceForDate } from '../../../../../../utils/dates';

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
      {posts.map((post, index) => {
        const regex = /(<([^>]+)>)/gi;
        const linkTo = post.link;
        const message = post.excerpt.rendered
          .replace(regex, '')
          .replace(/&#8217;/gi, "'")
          .replace(/&#8216;/gi, "'")
          .replace(/&amp;/gi, '&')
          .replace(/&#038;/gi, '&')
          .replace(/&#8221;/gi, '"')
          .replace(/&#8220;/gi, '"')
          .replace(/\[&hellip;\]/gi, '...');

        const title = post.title.rendered;
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;
        const author = post._embedded.author[0].name;
        const createdAt = post.date;
        return (
          <FeatureCardHorizontal
            key={`news_${index}`}
            background={media}
            title={title}
            subtitle={message}
            meta={`${author} - ${timeDifferenceForDate(createdAt)}`}
            buttonOne={
              <a
                href={linkTo}
                className={classes.messageButton}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  disabled={false}
                  onClickEvent={() => {}}
                  icon=""
                  title="Read"
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
