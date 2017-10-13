const assert = require('assert');
const app = require('../../src/app');

describe('\'avatar\' service', () => {
  it('registered the service', () => {
    const service = app.service('avatar');

    assert.ok(service, 'Registered the service');
  });
});
