Meteor.methods({
	addCat: function(title, image) {
		var attr={
			title:title,
			image:image
		}

		category.insert(attr);
		console.log("Inserted");
	},
	updateCat: function(id,attr) {
		category.update({_id:id},{$set: attr});
	},
	deleteCategory: function(id){
		category.remove(id);
	}
});