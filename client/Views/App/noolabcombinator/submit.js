Session.set("WEB-NAME","");
Template.submit.events({
	'submit form':function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var author = Meteor.userId();
		var title = $('#title').val();
		var url = $('#url').val();
		//var website = url.split(".com")[0] + ".com";
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		console.log("My website :"+website);
		var text = $('#text').val();
		var category =$('#category').val();
		var date = new Date();
		var obj = {
			title:title,
			url:url,
			website:website,
			text:text,
			author:author,
			category:category,
			date:date
		}
		Meteor.call('insertSubmit',obj);
		Router.go("/managesubmit");
	}
});
Template.updatesubmit.events({
	'click #btnUpdate': function(e){
		e.preventDefault();

		//var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var date = new Date();
		var author = Meteor.userId();//Meteor.userId();
		var title =$('#title').val();
		var url =$('#url').val();
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		var text =$('#text').val();//CKEDITOR.instances.editor1.getData();
		var id = this._id;
		alert("hello"+id);
		var category =$('#category').val();
			var obj={
				title:title,
				url:url,
				website:website,
				text:text,
				author:author,
				category:category,
				date:date
			}
			Meteor.call("UpdateSubmit",id,obj,function(erro){
				if(erro){console.log(erro.reason())}
				else{
					console.log("SUCESS UPDATE");
					Router.go("/managesubmit");
				}
			});
		}
});
Template.updatesubmit.helpers({
	getCat:function(id){
		return category.findOne({_id:id}).title;
		Router.go("/managesubmit");
	},
	getCategory:function(){
		return category.find();
	}
});
Template.managesubmit.events({
'click #remove':function(){
		var id = this._id;
		return products.remove({_id:id});
	}
});
Template.managesubmit.helpers({
	managesubmit:function(){
		return products.find();
	},
	getCategory:function(){
		var id = this.category;
		return category.findOne({_id:id}).title;
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
Template.submit.helpers({
	getCategory:function(){
		return category.find();
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