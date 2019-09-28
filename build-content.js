const {
  feed,
  build,
  indexes,
  posts,
  page,
} = require('@mtti/mhp');

const vars = {
  siteTitle: 'MHP Test Site',
  baseUrl: 'http://127.0.0.1',
  lang: 'en',
};

build(__dirname, vars, async ({ emit }) => {
  await emit('/posts/:category/:slug', posts());
  await emit('/', indexes());

  await emit('/feed', feed({
    uuid: '120024cf-8721-4492-b4de-eb6847c92abb',
    title: 'MHP Test Site Main Atom Feed',
    maxPosts: 50,
  }));

  await emit('/about.html', page('about.md'));
});
