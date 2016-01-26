Template.listdatabycat.helpers({
	getcat:function(){
        var catId = this.category;
        return category.findOne({_id:catId}).title;
    },
    getDatalist: function(){
        var catID = this._id;
        var result = data.find({category:catID});
        return result;
    }

});