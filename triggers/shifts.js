const sample = require('../samples/sample_shift');

const triggerShift = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: `https://api.sling.is/shifts/current`,
    params: {
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'shift',
  noun: 'Shift',

  display: {
    label: 'Get Shifts',
    description: 'Triggers on a new shift.'
  },

  operation: {
    inputFields: [
    ],
    perform: triggerShift,

    sample: sample
  }
};
