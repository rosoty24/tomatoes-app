Session.set("WEB-NAME","");
Template.addproduct.events({
	'submit form':function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var author = Meteor.userId();
		var title = $('#title').val();
		var url = $('#url').val();
		var img = Session.get('ADDIMAGEID');
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		console.log("My website :"+website);
		var description = $('#description').val();
		var category =$('#category').val();
		var date = new Date();
		var obj = {
			title:title,
			website:website,
			description:description,
			img:img,
			author:author,
			category:category,
			date:date
		}
		Meteor.call('insertSubmit',obj);
		Router.go("/product");
	},
	'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.updateProduct.events({
	'click #btnUpdate': function(e){
		e.preventDefault();

		//var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var date = new Date();
		var author = Meteor.userId();//Meteor.userId();
		var title =$('#title').val();
		var url =$('#url').val();
		var img = Session.get('ADDIMAGEID');
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		var description =$('#description').val();//CKEDITOR.instances.editor1.getData();
		var id = this._id;
		alert("hello"+id);
		var category =$('#category').val();
			var obj={
				title:title,
				website:website,
				description:description,
				img:img,
				author:author,
				category:category,
				date:date
			}
			Meteor.call("UpdateSubmit",id,obj,function(erro){
				if(erro){console.log(erro.reason())}
				else{
					console.log("SUCESS UPDATE");
					Router.go("/product");
				}
			});
		},
		'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.updateProduct.helpers({
	getCat:function(id){
		return category.findOne({_id:id}).title;
		Router.go("/allproduct");
	},
	getCategory:function(){
		return category.find();
	},
	'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.product.events({
'click #remove':function(){
		var id = this._id;
		return products.remove({_id:id});
	}
});
Template.product.helpers({
	getAllProduct:function(){
		return products.find();
	},
	getCategory:function(){
		var id = this.category;
		return category.findOne({_id:id}).title;
	},
	getImage: function(image){
        //var id = this.imgId;
        //console.log('MyimageId:' + id);
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    }
});
Template.home.helpers({
	getAuthorname:function(author){
		console.log("AUTHOR="+author);
	    var result = Meteor.users.findOne({_id:author});
		return result.profile.firstname+" "+result.profile.lastname;
	},
	'createdOn': function() {
        return new Date();
    },
	getPost:function(){
		var webname = Session.get("WEB-NAME");
		if(webname)
			return post.find({website:webname});
		else
			return post.find({});
	},
	getCategory:function(){
		var id = this.category;
		return category.findOne({_id:id}).title;
	}
});
Template.home.events({
	"click .web":function(e){
		e.preventDefault();
		var id = this._id;
		var webname = $("#web_"+id).text();
		Session.set("WEB-NAME",webname);
	}
});
Template.addproduct.helpers({
	getCategory:function(){
		return category.find();
	},
	getImage: function(image){
        //var id = this.imgId;
        //console.log('MyimageId:' + id);
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    }
});
Template.header.events({
	"click #home":function(e){
		e.preventDefault();
		Session.set("WEB-NAME",undefined);
		alert("hello");
		Router.go("/");
	},
	"click #profile":function(e){
		e.preventDefault();
		Router.go("/profileAuthor/"+Meteor.userId());
	}
});