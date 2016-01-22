Template.productDetail.helpers({
	getProduct:function(){
		return products.find();
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
    getReview:function(){
    	var id = this._id;
    	return review.find({proId:id});

    }
});

// comment
Template.productDetail.events({
    "click #submit": function(e,tlp){
        e.preventDefault();
        var id = this._id;
        alert("id "+id);
        var date = new Date();
        var text = tlp.$('#comment').val();
        var userId = Meteor.userId();
        var type = "My type of products";
        //var commentId = Random.id();
        var object={
            comments:
                {
                     text:text, 
                     date:date, 
                     userId:Meteor.userId(), 
                     type:type
                }
        }
        if(userId=userId){
            Meteor.call('updatePro',id,object);
        }else{
            alert("Please login");
        }
        
        //post.update(this._id,object);
        
    },
    // "click .clickHere":function(e){
    //     $(e.currentTarget).next(".hideCom").toggle();
        
    // }
});
Template.productDetail.helpers({
    getPostCom:function(){
        // alert("it success");
        var id = this._id;
        var result= products.find({_id:id});
        return result;
        //console.log("Helll Pisey "+result);
    }
});
