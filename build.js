({
  baseUrl: 'js',
  out: 'js/app.min.js',
  name: 'app',
  paths: {
      /* Use 'empty:' for CDN dependencies */
      jquery: 'empty:',
      underscore: 'empty:',
      backbone: 'empty:',
      webfont: 'empty:',
      boxView: 'social/boxView',
      boxCollection: 'social/boxCollection',
      boxController: 'social/boxController',
      twitterController: 'twitter/twitterController',
      twitterView: 'twitter/twitterView',
      twitterEntities: 'lib/twitterEntities',
      stackExchangeController: 'stackexchange/stackExchangeController',
      stackExchangeView: 'stackexchange/stackExchangeView',
      controllers: 'controllers'
  }
})