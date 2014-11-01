define([
  'jquery',
  'underscore',
  'backbone',
  'views/formView',
  'views/dashboardView'
], function($, _, Backbone, FormView, DashBoardView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/formView': 'showForm',
      '/dashboardView': 'showDashboard',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('showForm', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var formView = new FormView();
      formView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('showDashboard', function(){
      var dashBoardView = new DashBoardView();
      dashBoardView.render();
    });
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
