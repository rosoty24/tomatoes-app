Template.addcategory.events({
	'submit form': function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parent = $('#parent').val();

		Meteor.call("addCat", title, parent, function(err){
			if(err){
				console.log(err);
			}else{
				alert("success");
				Router.go("/manageCategory");
			}
		});
	}

});

Template.manageCategory.helpers({
	manageCat: function(){
		var result = category.find({});
		console.log(result);
		return result;
	},
	catName: function(cat){
		if(cat=='0')
			return;
		var result = category.findOne({_id:cat});
		return result.title;
	}
});

Template.manageCategory.events({
	'click #remove': function(e){
		e.preventDefault();
		var id = this._id;
		Meteor.call('deleteCategory', id);
		
	}
});

Template.updateCategory.helpers({
	getCat: function(cat){
		var cats = category.findOne({_id:cat});
		Session.set('data',cats.title);
		return cats.title;
	},
	checkParent:function(catId,realParent){
		console.log(catId+"=="+realParent.parent);
		return catId==realParent.parent;
	},
	getCatall: function(){
		return category.find({});
	}
});	

Template.updateCategory.events({
	"submit form": function(e) {
		e.preventDefault();
		var id = $("#idRecord").val();
		var title = $('#title').val();
		var parent = $('#parent').val();

		var attr={
			title:title,
			parent:parent
		
		}

		Meteor.call('updateCat',id, attr);
		Router.go('/manageCategory');   
	}
});

