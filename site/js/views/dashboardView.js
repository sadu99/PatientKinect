define(['jquery','underscore', 'backbone', 'text!templates/dashboardView.html','js/models/messageModel', 'js/views/formView' ],
  function($, _, Backbone, dashboardViewTemplate, MessagePillModel, FormView){
     var DashboardView = Backbone.View.extend({
        el: $('#container'),
        events: {
          "click #add": this.openCompose
        },
        render: function() {
          // Using Underscore we can compile our template with data
          var data = {};
          var compiledTemplate = _.template( dashboardViewTemplate, data );
          // Append our compiled template to this Views "el"
          this.$el.append( compiledTemplate );
        },
        openCompose: function() {
          //create model and give a clean one to compose
          var model= new MessagePillModel();
          this.formView = new FormView(model);
        },
        /*edit: function(event) {
          var modelId=event.target.cid;
          //model in collection
          //render the edit view with the model
        }*/
      });

      // Our module now returns our view
      return DashboardView;
});