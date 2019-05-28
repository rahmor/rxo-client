import config from '../config';
const ApiService = {
  getSchedule() {
    return fetch(`${config.TEST_API_ADDRESS}`, {
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
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },
  postRegistration(username, password) {
    return fetch(`${config.TEST_API_ADDRESS}api/registration`, {
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
