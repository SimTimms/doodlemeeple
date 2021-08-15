import React from 'react';
import axios from 'axios';
import { FeaturedCreative } from '../../../../../components';

export function getPosts(setPosts) {
  let didCancel = false;
  const axiosCancel = axios.CancelToken.source();
  if (!didCancel) {
    axios
      .get(
        `${process.env.REACT_APP_WEBSITE}/wp-json/wp/v2/posts?_embed&categories=1`,
        {
          cancelToken: axiosCancel.token,
        }
      )
      .then((response) => {
        localStorage.setItem('posts', JSON.stringify(response.data));
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export function FeaturedArticle({ history }) {
  const [article, setArticle] = React.useState(null);
  let didCancel = false;
  const axiosCancel = axios.CancelToken.source();
  const cacheData = JSON.parse(localStorage.getItem('featureArticle'));
  if (!didCancel && !cacheData) {
    axios
      .get(
        `${process.env.REACT_APP_WEBSITE}/wp-json/wp/v2/posts?_embed&categories=2`,
        {
          cancelToken: axiosCancel.token,
        }
      )
      .then((response) => {
        const featuredArticleData = {
          id: response.data[0].slug,
          article: {
            title: response.data[0].title.rendered,
            image: response.data[0]._embedded,
            linkTo: response.data[0].link,
            excerpt: response.data[0].excerpt.rendered,
          },
        };
        localStorage.setItem(
          'featureArticle',
          JSON.stringify(featuredArticleData)
        );
        setArticle(featuredArticleData);
      })
      .catch((error) => {});
  }
  return cacheData ? (
    <FeaturedCreative history={history} featuredArticle={cacheData} />
  ) : article ? (
    <FeaturedCreative history={history} featuredArticle={article} />
  ) : null;
}
