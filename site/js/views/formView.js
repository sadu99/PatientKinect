define(['jquery','underscore', 'backbone', 'js/views/dashboardView', 'text!templates/formView.html'],
  function($, _, Backbone, DashboardView, formViewTemplate){
   var FormView = Backbone.View.extend({
      el: $('#container'),
      events: {
        "click #submit": this.saveValues
      },
      
    
   render: function() {
        // Using Underscore we can compile our template with data
        var data = {};
        var compiledTemplate = _.template( formViewTemplate, data );
        // Append our compiled template to this Views "el"
        this.$el.append( compiledTemplate );
    },
    saveValues: function() {
        //validate all fields
        var name=$("#InputName").val(),
            email=$("#InputEmail").val(),
            action=$("#ActionType").val(),
            title=$("#ActionName").val(),
            message=$("#InputMessage").val(),
            gesture=$("#GestureType").val(),
            voice=$("#VoiceCommand").val();

        var pillDetails = {
          name: name ? name : "",
          email: email ? email : "",
          action: action ? action: "",
          title: title ? title: "",
          message: message ? message: "",
          gesture: gesture,
          voice: voice
        };

        var client = new WindowsAzure.MobileServiceClient( "https://patientkinetic.azure-mobile.net/", "hgxlClqRPWfbBaaDphjczATvgrVbQX43" ); 
        client.getTable("patient_kinetic").insert(pillDetails);
      
        this.renderNewPill(pillDetails);
    },
    renderNewPill: function(pillDetails) {
        var dashboardView= new DashboardView(pillDetails);
    }
    });
    // Our module now returns our view
    return FormView;
});
