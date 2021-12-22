import Cookies from 'js-cookie';

export default function logout(history) {
  Cookies.remove('token');
  Cookies.remove('DMuserId');
  localStorage.removeItem('featureArticle');
  localStorage.removeItem('posts');
  history.push(`/`);
}
