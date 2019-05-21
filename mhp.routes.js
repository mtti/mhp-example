const { middleware } = require('@mtti/mhp');

module.exports = function(router) {
  router.setGlobals({
    siteTitle: 'MHP Test Site',
  });

  router.get('/posts/:category/:slug', middleware.posts());
  router.get('/', middleware.indexes({}));

  router.get('/atom.xml', middleware.atom({
    uuid: '120024cf-8721-4492-b4de-eb6847c92abb',
    title: 'MHP Test Site Main Atom Feed',
  }));

  router.get('/about.html', (req, res) => res.renderPage('about.md'));
}
