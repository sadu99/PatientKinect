define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var DashboardModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return DashboardModel;
});
