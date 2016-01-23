Template.addproduct.events({
	'submit form':function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var author = Meteor.userId();
		var title = $('#title').val();
		var price = $('#price').val();
		var stock = $("#stock").val();
		var img = Session.get('ADDIMAGEID');
		var description = $('#description').val();
		var category =$('#category').val();
		var date = new Date();
		var obj = {
			title:title,
			description:description,
			price:price,
			stock:stock,
			img:img,
			author:author,
			category:category,
			date:date,
			status:0
		}
		Meteor.call('insertSubmit',obj);
		Router.go("/admin/product");
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
		var id = this._id;
		var author = Meteor.userId();
		var title = $('#title').val();
		var price = $('#price').val();
		var stock = $("#stock").val();
		var img = Session.get('ADDIMAGEID');
		var currentImage = $("#current").val();
		var description = $('#description').val();
		var category =$('#category').val();
		var date = new Date();
		if(typeof img == "undefined")
			img = currentImage;
		else
			img = img;
		var obj={
			title:title,
			description:description,
			price:price,
			stock:stock,
			img:img,
			author:author,
			category:category,
			date:date,
			status:0
		}
		Meteor.call("UpdateSubmit",id,obj,function(erro){
			if(erro){console.log(erro.reason())}
			else{
				console.log("SUCESS UPDATE");
				Session.set('ADDIMAGEID',undefined);
				Router.go("/admin/product");
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
Template.allproduct.events({
'click #remove':function(){
		var id = this._id;
		return products.remove({_id:id});
	}
});
Template.allproduct.helpers({
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
    },
    getStuff: function(){
        return "Amsterdam,Washington,Sydney,Beijing,Cairo";
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