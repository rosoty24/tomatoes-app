Template.data.helpers({
	getdata:function(){
		return data.find({});
	}
});
Template.home.helpers({
	getData:function(){
		return data.find({});
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