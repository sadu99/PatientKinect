// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'js/lib/jquery-2.1.1.min',
    underscore: 'js/lib/underscore-min',
    backbone: 'js/lib/backbone-min',
    text: 'js/lib/text'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});