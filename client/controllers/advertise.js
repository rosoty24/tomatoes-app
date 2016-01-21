Template.addadvertise.events({
	'submit form': function(e){
		e.preventDefault();
		var image =$('#image').val();
		var img_id = Session.get('ADDIMAGEID');
		var url = $('#url').val();

		Meteor.call("addAdvertise", img_id, url, function(err){
			if(err){
				console.log(err);
			}else{
				alert("success");
				Router.go("/manageAdvertise");
			}
		});
	},
	'change #image': function(event, template) {
		event.preventDefault();
		var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
			images.insert(files[i], function (err, fileObj) {
				console.log('inserted image: '+fileObj);
				console.log('error:'+JSON.stringify(err));
				Session.set('ADDIMAGEID', fileObj._id);
			});
		}
    }

});

Template.manageAdvertise.helpers({
	manageAdvertise: function(){
		return advertise.find({});
	},
	getImage: function(id){
        var img = images.findOne({_id:id});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }
        else{
            return;
        }
    }
});

Template.manageAdvertise.events({
	'click #remove': function(e){
		e.preventDefault();
		var id = this._id;
		Meteor.call('deleteCategory', id);
		
	}
});

Template.updateAdvertise.helpers({
	getAdvertise: function(id){
		return advertise.findOne({_id:id});
	}
});	

Template.updateAdvertise.events({
	"submit form": function(e) {
		e.preventDefault();
		var id= this._id;
		var image =$('#image').val();
		var img_id = Session.get('UPDATEIMAGEID');
		var url = $('#url').val();

		var attr={
			image:img_id,
			url:url
		
		}

		Meteor.call('updateAdvertise',id, attr);
		Router.go('/manageAdvertise');   
	},
    'change #image': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            images.insert(files[i], function(err, fileObj) {
                Session.set('UPDATEIMAGEID', fileObj._id);
            });
        }
    }
});
