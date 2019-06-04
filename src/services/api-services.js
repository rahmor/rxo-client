import config from '../config';
import AuthService from './auth-service';

const ApiService = {
  getUserSchedule(id) {
    return fetch(`${config.LIVE_API_ADDRESS}api/prescriptions/${id}`, {
      headers: {
        authorization: `bearer ${AuthService.getToken()}`
      }
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },

  postPrescription(rx_name, day, time) {
    return fetch(`${config.TEST_API_ADDRESS}api/prescriptions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${AuthService.getToken()}`
      },
      body: JSON.stringify({ rx_name, day, time })
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },
  postLogin(username, password) {
    return fetch(`${config.LIVE_API_ADDRESS}api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user_name: username, user_password: password })
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },

  postRegistration(username, password) {
    return fetch(`${config.LIVE_API_ADDRESS}api/register`, {
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
  }
};

export default ApiService;
