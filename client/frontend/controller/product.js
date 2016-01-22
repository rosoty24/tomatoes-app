Template.productDetail.helpers({
	getallReview:function(){
    	var id = this._id;
    	console.log("MY ID IS "+id);
    	var result = review.find({productId:id});
    	console.log(" MY RESTLT IS "+result);
    	return result;
    },
	getImage: function(){
		var image = this.img;
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    },
    getUser:function(userId){
    	var result = users.findOne({_id:userId});
    	return result.profile.firstname;
    }
});