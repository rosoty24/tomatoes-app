Meteor.methods({
	insertSubmit: function(obj) {
  		post.insert(obj);
  	},
  	UpdateSubmit: function(id,obj) {
  		return post.update({_id:id},{$set:obj});
  	}
});