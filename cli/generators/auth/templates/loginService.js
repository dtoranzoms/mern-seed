import fetch from 'isomorphic-fetch';
import * as endpoints from './apiEndpoints';

class LoginService {

  static login(formData) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { username: formData.username, password: formData.password }
      })
    });

    return fetch(request).then(response => {
      if (response.status >= 400) {
        throw new Error();
      }
      return response.json();
    });
  }

}

export default LoginService;