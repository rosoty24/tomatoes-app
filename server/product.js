Meteor.methods({
	updateComment:function(id,object){
		data.update({_id:id},{$addToSet:{comments:object}});
	},
	insertSubmit: function(obj) {
  		products.insert(obj);
  	},
  	UpdateSubmit: function(id,obj) {
  		return products.update({_id:id},{$set:obj});
  	},
  	insertLove:function(attr){
    	feeling.insert(attr);
  	},
  	insertLike:function(attr){
    	feeling.insert(attr);
  	},
  	insertDislike:function(attr){
    	feeling.insert(attr);
  	},
  	insertWinter:function(attr){
    	feeling.insert(attr);
  	},
  	insertSpring:function(attr){
    	feeling.insert(attr);
  	},
  	insertSummer:function(attr){
    	feeling.insert(attr);
  	},
  	insertFall:function(attr){
    	feeling.insert(attr);
  	},
  	insertDay:function(attr){
    	feeling.insert(attr);
  	},
  	insertNight:function(attr){
    	feeling.insert(attr);
  	}
});