import React from 'react';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  FeatureCard,
  LoadIcon,
  IconButton,
} from '../../../../../../components';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { PROFILE_FEATURED } from '../../../../../../data/queries';

export function FeaturedMini({ posts, featuredId, history }) {
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
        const title = post.title.rendered;
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;

        return (
          <div key={`featured_${index}`} style={{ width: '100%' }}>
            <Query
              query={PROFILE_FEATURED}
              variables={{ userId: featuredId }}
              fetchPolicy="network-only"
            >
              {({ data }) => {
                return data ? (
                  <FeatureCard
                    background={media}
                    thumbnail={data.profilePreview.profileImg}
                    title={title}
                    subtitle="Featured Artist"
                    buttonOne={
                      <IconButton
                        color="text-dark"
                        disabled={false}
                        onClickEvent={() => {
                          history.push(`/public-preview/${featuredId}`);
                        }}
                        icon=""
                        title="profile"
                        styleOverride={null}
                        type="button"
                      />
                    }
                    buttonTwo={
                      <a
                        href={linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton
                          color="text-dark"
                          disabled={false}
                          onClickEvent={() => {}}
                          icon=""
                          title="article"
                          styleOverride={null}
                          type="button"
                        />
                      </a>
                    }
                  />
                ) : (
                  <LoadIcon />
                );
              }}
            </Query>
          </div>
        );
      })}
    </div>
  );
}
