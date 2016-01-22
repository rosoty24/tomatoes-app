Template.addreview.events({
	"click #btnreview":function(e,tlp){
		e.preventDefault();
		var text = tlp.$('#text').val();
		var productiId= tlp.$('#products').val();
		var userId = Meteor.userId();
		var proId = $('#productName').val();
		//var date = new Date();
		   var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth()+1; //January is 0!

	    var yyyy = today.getFullYear();
	    if(dd<10){
	        dd='0'+dd
	    } 
	    if(mm<10){
	        mm='0'+mm
	    } 
	    var date = dd+'/'+mm+'/'+yyyy;
	    alert(date);


		var type = "Products Type";
		alert('Can Get :'+text+productiId+userId);
		var obj={
			text:text,
			productId:productiId,
			userId:Meteor.userId(),
			proId:proId,
			type:type,
			date:date
		}
		Meteor.call("insertReview",obj);
	}
});
Template.addreview.helpers({
	getAllReview:function(){
		return review.find();
	},
	getProduct:function(){
		return products.find();
	}
});
Template.review.helpers({
	getAllReview:function(){
		return review.find();
	},
	getProduct:function(){
		var id = this.productiId;
		return review.findOne({_id:id});
	}
});