const { middleware } = require('@mtti/mhp');

module.exports = function(router) {
  router.get('/', middleware.indexes({}));
}
