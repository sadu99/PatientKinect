define(['jquery','underscore', 'backbone', 'text!templates/dashboardView.html'], function($, _, Backbone, dashboardViewTemplate){
 var DashboardView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( dashboardViewTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return FormView;
});