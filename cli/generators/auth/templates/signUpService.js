import fetch from 'isomorphic-fetch';
import * as endpoints from './apiEndpoints';

class SignUpService {

  static signUp(formData) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.SIGNUP}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { username: formData.username, email: formData.email, password: formData.password }
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

export default SignUpService; 