define(['jquery','underscore', 'backbone', 'text!templates/formView.html'], function($, _, Backbone, formViewTemplate){
 var FormView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( formViewTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return FormView;
});
