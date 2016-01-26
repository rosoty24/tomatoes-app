Template.listdatabycat.helpers({
	getcat:function(){
        var catId = this.category;
        return category.find({_id:catId});
    },
    getDatalist: function(){
        var catID = this._id;
        var result = data.find({category:catID});
        return result;
    }

});