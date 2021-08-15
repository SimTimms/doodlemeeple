import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, IconButton, LoadIcon, Row } from '../';
import { Query } from 'react-apollo';
import { PROFILE_FEATURED } from '../../data/queries';
import { excerptReplace } from '../../utils/excerptReplace';
import final from '../../assets/final.jpg';

export default function FeaturedCreative({ history, featuredArticle }) {
  const classes = useStyles();

  return (
    <Query query={PROFILE_FEATURED} variables={{ userId: featuredArticle.id }}>
      {({ data, loading }) => {
        const linkTo = featuredArticle.article.linkTo;
        const title = featuredArticle.article.title;
        const excerpt = excerptReplace(featuredArticle.article.excerpt);

        return loading ? null : data ? (
          <Column>
            <div className={classes.excerptBack}>
              <Row pb={10} pt={10}>
                <Column a="flex-end" p="20px" w={700}>
                  <Typography variant="h5" className={classes.excerpt}>
                    {excerpt}
                  </Typography>
                  <Typography variant="body1" className={classes.excerptAuthor}>
                    {title}
                  </Typography>
                  <a href={linkTo} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1" className={classes.excerptLink}>
                      Read Full Article
                    </Typography>
                  </a>
                </Column>
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
