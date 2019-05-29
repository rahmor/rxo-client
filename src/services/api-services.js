import config from '../config';
import AuthService from './auth-service';

const ApiService = {
  getSchedule() {
    return fetch(`${config.TEST_API_ADDRESS}`, {
      mode: 'cors',
      headers: {}
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },

  postLogin(username, password) {
    return fetch(`${config.TEST_API_ADDRESS}api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response =>
        !response.ok
          ? response.json().then(e => Promise.reject(e))
          : response.json()
      )
      .then(jwtToken => {
        AuthService.setToken(jwtToken);
      });
  },

  postRegistration(username, password) {
    return fetch(`${config.TEST_API_ADDRESS}api/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },

  postPrescription(name, day, time) {
    return fetch(`${config.TEST_API_ADDRESS}api/prescriptions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, day, time })
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  }
};

export default ApiService;
