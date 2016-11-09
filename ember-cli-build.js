/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
      //https://github.com/nathanpalmer/example-semantic-ui-ember-cli/blob/master/ember-cli-build.js
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        //TEMPORARY DISABLE FOR SPEED 'bower_components/semantic-ui'
      ]
    },
    //https://github.com/nathanpalmer/example-semantic-ui-ember-cli/blob/master/ember-cli-build.js
    //http://semantic-org.github.io/Semantic-UI-Ember/#/modules/usage
    SemanticUI: {
      // These flags allow you do turn on or off auto imports for Semantic UI
      import: {
        css: true, //TEMPORARY TRUE FOR SPEED //!!DISABLE IN PRODUCTION AND BUILD THE WHOLE LESS, see app.less
        javascript: true,
        image: true,
        fonts: true
      },

      // These settings allow you to specify the source of the Semantic files
      // Change the fonts if you are using a different theme. Default theme is "default"
      source: {
        css: 'bower_components/semantic-ui/dist',
        javascript: 'bower_components/semantic-ui/dist',
        images: 'bower_components/semantic-ui/dist/themes/default/assets/images', //DO NOT CHANGE THEME. Other themes do not have image assets (flags). Use the default theme here always.
        fonts: 'bower_components/semantic-ui/dist/themes/default/assets/fonts'
      },
      // These settings allow you to specify the destination of the Semantic files
      // This only applies to images and fonts, since those are assets
      destination: {
        /*
         * BUG:: See my documentation here:
         * https://github.com/Semantic-Org/Semantic-UI-Ember/issues/162#issuecomment-254665468
         *
         * Using ember-cli-less, the source files aren't being rewritten to relative by GULP (weren't not using gulp)
         * So semantic.css once compiled is search for the images in the wrong location.
         * eg. src: url("../../themes/default/assets/fonts/icons.eot");
         *
         * I have written a successful workaround by correcting the URLS in the Semantic LESS.
         * - See styles/app.less
         */
        images: 'assets/themes/default/assets/images', //DO NOT CHANGE THEME. Other themes do not have image assets (flags). Use the default theme here always. Mostly just flag images.
        fonts: 'assets/themes/default/assets/fonts'
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
