define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var FormModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return FormModel;
});
