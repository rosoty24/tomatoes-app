Meteor.methods({
	insertSubmit: function(obj) {
  		products.insert(obj);
  	},
  	UpdateSubmit: function(id,obj) {
  		return products.update({_id:id},{$set:obj});
  	}
});