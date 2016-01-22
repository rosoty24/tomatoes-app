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
    },
    getUser:function(userId){
    	var result = users.findOne({_id:userId});
    	return result.profile.firstname;
    }
});