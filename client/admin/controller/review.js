Template.addreview.events({
	"click #btnreview":function(e,tlp){
		e.preventDefault();
		var text = tlp.$('#text').val();
		var productId= tlp.$('#products').val();
		//alert(productId);
		var userId = Meteor.userId();
		//var proId = $('#productName').val();
		//var date = new Date();
		var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth()+1; 
	    var yyyy = today.getFullYear();
	    if(dd<10){
	        dd='0'+dd
	    } 
	    if(mm<10){
	        mm='0'+mm
	    } 
	    var date = dd+'/'+mm+'/'+yyyy;
	    //alert(date);
		var type = "Products Type";
		//alert('Can Get :'+text+productId+userId);
		var obj={
			text:text,
			productId:productId,
			userId:Meteor.userId(),
			productId:productId,
			type:type,
			date:date
		}
		Meteor.call("insertReview",obj);
	},
	"click #remove":function(e){
        e.preventDefault();
        //alert('Remove Project!!!');
        var id = this._id;
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call("deleteReview",id);
        }
    }
});
Template.addreview.helpers({
	getAllReview:function(){
		return review.find();
	},
	getProduct:function(){
		return products.find({});
	},
	getdata:function(){
		return data.find({});
	}
});
Template.updateReview.events({
	"click #update":function(e,tlp){
		e.preventDefault();
		alert("helo")
		var id = this._id;
		var quote = tlp.$('#quote').val();
		var score= tlp.$('#score').val();
		var url = "url";
		var author = tlp.$('#author').val();
		var img = Session.get('ADDIMAGEID');
		var websiteName= tlp.$('#websiteName').val();
		var url = "url";
		alert('Can Get :'+text+productiId+userId);
		var obj={
			text:text,
			productId:productiId,
			userId:Meteor.userId(),
			type:type,
			date:date
		}
		Meteor.call("EditReview",id,obj);
		Router.go('/admin/addreview')
	},
	'change #image': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.updateReview.helpers({
	getProduct:function(){
		return products.find({});
	}
});