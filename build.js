({
  baseUrl: 'js',
  out: 'js/app.min.js',
  name: 'app',
  	// Use RequireJS "empty:" for CDN dependencies
    paths: {
    jquery: 'empty:',
    underscore: 'empty:',
    backbone: 'empty:',
    webfont: 'empty:'
  }
})