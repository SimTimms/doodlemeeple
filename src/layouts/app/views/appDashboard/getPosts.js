import axios from 'axios';

export function getPosts(setPosts) {
  let didCancel = false;
  const axiosCancel = axios.CancelToken.source();
  if (!didCancel) {
    axios
      .get('https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=1', {
        cancelToken: axiosCancel.token,
      })
      .then((response) => {
        localStorage.setItem('posts', JSON.stringify(response.data));
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export function getFeatured(setFeaturedArticle) {
  let didCancel = false;
  const axiosCancel = axios.CancelToken.source();
  if (!didCancel) {
    axios
      .get('https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=2', {
        cancelToken: axiosCancel.token,
      })
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
        setFeaturedArticle(featuredArticleData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
