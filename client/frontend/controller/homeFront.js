Template.homefront.helpers({
	getAllPost:function(){
		return post.find();
	},
	getFavorite:function(){
		//var id = Session.get("getProId");
		var id = this._id;
		return favorite.find({proId:id}).count();
	}
});

Template.homefront.events({
	'click #title':function(e){
		e.preventDefault();
		var id = this._id;	
	},
	'click .addlike':function(e){
		e.preventDefault();
        var id=this._id;
        //Session.set("getProId",id);
		//var userId = Meteor.userId();
		console.log('id'+Session.get('userId'));
             if(Session.get('userId')){
                 //alert();
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj,function(error){
                 	if(error){console,log("Add like error"+error.reason())}
                 	else{
                 		$('#like_'+id).addClass('hidden');
        				$('#unlike_'+id).removeClass('hidden');
                 	}
                 });
            }
            else{
            	var newId=Meteor.userId();
                Session.setPersistent('userId',newId);
                 //var ses=Session.get('userId');
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 //alert('Product successfully added to favorite!');
            }
	},
	'click .addunlike':function(e){
		e.preventDefault();
		var id=this._id;
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        $('#unlike_'+id).addClass('hidden');
        $('#like_'+id).removeClass('hidden');
	}
});