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
import { excerptReplace } from '../../../../../../utils/excerptReplace';
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
        const linkTo = post.link;
        const message = excerptReplace(post.excerpt.rendered);

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
                  color="text-white"
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
