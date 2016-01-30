Meteor.methods({
	insertReview: function(obj) {
  		review.insert(obj);
  	},
  	deleteReview: function (id) {
      return review.remove(id);
   },
  	updateReview:function(id,object){
		review.update({_id:id},{$addToSet:{reviews:object}});
	}
});