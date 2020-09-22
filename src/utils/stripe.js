import axios from 'axios';
import Cookies from 'js-cookie';

export async function requestStripe(history) {
  const token = Cookies.get('token');
  {
    await axios
      .post(`${process.env.REACT_APP_API_S3}/stripe-onboarding`, null, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        window.location.replace(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
