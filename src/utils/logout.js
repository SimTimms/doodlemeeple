import Cookies from 'js-cookie';

export default function logout(history) {
  Cookies.remove('DMtoken');
  Cookies.remove('DMuserId');
  localStorage.removeItem('featureArticle');
  localStorage.removeItem('posts');
  history.push(`/`);
}
