'use strict';

exports.addApiKeyToHeader = () => (request, z, bundle) => {
  request.headers.Authorization = `${bundle.authData.api_key}`;
  return request;
};
