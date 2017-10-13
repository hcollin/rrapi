const avatar = require('./avatar/avatar.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(avatar);
};
