// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'twbs:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '3.3.5',
  git: 'https://github.com/twbs/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
<<<<<<< HEAD
    'dist/fonts/glyphicons-halflings-regular.woff2'
  ], 'client', { isAsset: true });
  api.addFiles([
=======
    'dist/fonts/glyphicons-halflings-regular.woff2',
>>>>>>> f0049f719e6b3a0d4118c010bfe3d54f0da0e45f
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
