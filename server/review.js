Meteor.methods({
	insertReview: function(obj) {
  		review.insert(obj);
  	},
  	deleteReview: function (id) {
      return review.remove(id);
   },
   EditReview: function(id,obj) {
  		review.update({_id:id},{$set:obj});
  	}
});