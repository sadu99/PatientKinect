define(['jquery','underscore', 'backbone', 'text!templates/messagePill.html'],
  function($, _, Backbone, messagePillTemplate){
   var MessagePill = Backbone.View.extend({
      el: $('#container'),
      events: {
        "click #add": this.openCompose,
        "click .edit": this.edit
      },
      
    
   render: function() {
        // Using Underscore we can compile our template with data
        var data = {};
        var compiledTemplate = _.template( formViewTemplate, data );
        // Append our compiled template to this Views "el"
        this.$el.append( compiledTemplate );
    },

    destroy: function(){
      this.undelegateEvents();
      this.removeData().unbind();
    }
    });
    // Our module now returns our view
    return MessagePill;
});
