// Initializes the `avatar` service on path `/avatar`
const createService = require('feathers-memory');
const hooks = require('./avatar.hooks');
const filters = require('./avatar.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'avatar',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/avatar', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('avatar');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
