import config from '../config';
const ApiService = {
  getSchedule() {
    return fetch(`${config.TEST_API_ADDRESS}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;
