Template.addreview.events({
	"click #btnreview":function(e,tlp){
		e.preventDefault();
		var text = tlp.$('#text').val();
		var productiId= tlp.$('#products').val();
		var userId = Meteor.userId();
		var date = new Date();
		var type = "Products Type";
		alert('Can Get :'+text+productiId+userId);
		var obj={
			text:text,
			productId:productiId,
			userId:Meteor.userId(),
			type:type,
			date:date
		}
		if(userId=userId){
			Meteor.call("insertReview",obj);
		}else{
			alert('you need to login first!!!!!')
		}
		
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
	getProname:function(pro){
		return products.findOne({_id:pro}).title;
	}
});
Template.updateReview.events({
	"click #update":function(e,tlp){
		e.preventDefault();
		var id = this._id;
		var text = tlp.$('#text').val();
		var productiId= tlp.$('#products').val();
		var userId = Meteor.userId();
		var date = new Date();
		var type = "Products Type";
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
	}
});
Template.updateReview.helpers({
	getProduct:function(){
		return products.find({});
	}
});