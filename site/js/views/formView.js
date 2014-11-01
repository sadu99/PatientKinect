define(['jquery','underscore', 'backbone', 'text!templates/formView.html', 'views/dashboardView.js'],
  function($, _, Backbone, formViewTemplate, DashboardView){
   var FormView = Backbone.View.extend({
      el: $('#container'),
      events: {
        "click #submit": saveValues
      }
      render: function(){
        // Using Underscore we can compile our template with data
        var data = {};
        var compiledTemplate = _.template( formViewTemplate, data );
        // Append our compiled template to this Views "el"
        this.$el.append( compiledTemplate );
      },
      saveValues: function() {
        //validate all fields
        var name=$("#InputName").val();
        var data={};
        data.name=name;

        this.renderNewPill();
      },
      renderNewPill: function(data){
        var dashboardView= new DashboardView(data);
      }
    });
    // Our module now returns our view
    return FormView;
});
