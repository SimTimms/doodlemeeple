import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, IconButton, LoadIcon, Row } from '../';
import { Query } from 'react-apollo';
import { PROFILE_FEATURED } from '../../data/queries';
import { excerptReplace } from '../../utils/excerptReplace';

export default function FeaturedCreative({ history, featuredArticle }) {
  const classes = useStyles();

  return (
    <Query query={PROFILE_FEATURED} variables={{ userId: featuredArticle.id }}>
      {({ data, loading }) => {
        const linkTo = featuredArticle.article.linkTo;
        const title = featuredArticle.article.title;
        const excerpt = excerptReplace(featuredArticle.article.excerpt);
        const media = featuredArticle.article.image['wp:featuredmedia']
          ? featuredArticle.article.image['wp:featuredmedia']['0'].source_url
          : null;
        return loading ? null : data ? (
          <Column>
            <div className={classes.excerptBack}>
              <Row pb={10} pt={10}>
                <img
                  src={
                    data.userById
                      ? data.userById.profileImg
                      : process.env.REACT_APP_DEVICE
                  }
                  alt=""
                  className={classes.articleAvatar}
                />
                <Column a="flex-end" p="0 10px 0 0 ">
                  <Typography variant="h6" style={{ color: '#fff' }}>
                    {excerpt}
                  </Typography>
                  <Typography variant="body1" style={{ color: '#fff' }}>
                    {title}
                  </Typography>
                </Column>
              </Row>
            </div>
            <div
              className={classes.articlePanel}
              style={{
                backgroundImage: `url(${media})`,
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <Row>
                <div className={classes.options}>
                  <IconButton
                    color="text-white-mini"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(`/app/public-preview/${featuredArticle.id}`);
                    }}
                    icon="face"
                    title="View Profile"
                    styleOverride={null}
                    type="button"
                    iconPos="left"
                  />
                  <div
                    style={{
                      height: 20,
                      borderLeft: '1px solid rgba(255,255,255,0.4)',
                    }}
                  ></div>
                  <a
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      color="text-white-mini"
                      disabled={false}
                      onClickEvent={() => {}}
                      icon="article"
                      title="Read Article"
                      styleOverride={null}
                      type="button"
                      iconPos="right"
                    />
                  </a>
                </div>
              </Row>
            </div>
          </Column>
        ) : loading ? (
          <div className={classes.articlePanel}>Loading</div>
        ) : (
          <LoadIcon />
        );
      }}
    </Query>
  );
}
