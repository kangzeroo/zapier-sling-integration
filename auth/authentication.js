'use strict';

const authentication = {
  type: 'custom',
  // "test" could also be a function
  test: {
    url:
      'https://api.sling.is/shifts/current'
  },
  fields: [
    {
      key: 'api_key',
      type: 'string',
      required: true,
      helpText: 'Found in your Sling client as specified at https://api.sling.is/#/'
    }
  ]
};


module.exports = authentication;
