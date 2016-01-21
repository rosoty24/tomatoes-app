Meteor.methods({
	addCat: function(title, parent) {
		var attr={
			title:title,
			parent:parent
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