import * as api from './_base';
import * as controller from '../controllers/testApi';

/**
 * Tests Server routes
 * @param {*} request Request object from express. Receives:
 * @param {*} response Response object from express.
 */
export const testApi = (request, response) => {
  const hello = 'Hello World';
  return controller
    .testApi(hello)
    .then(result => api.success(response, result))
    .catch(error => api.error(response, error));
};
