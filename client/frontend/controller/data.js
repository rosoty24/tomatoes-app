Template.data.helpers({
	getdata:function(){
		return data.find({});
	}
});
Template.home.helpers({
	getData:function(){
		return data.find({});
	},
    getCatname:function(cat){
        return category.findOne({_id:cat}).title;
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
