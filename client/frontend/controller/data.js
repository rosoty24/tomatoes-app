Template.data.helpers({
	getdata:function(){
		return data.find({});
	}
    
});
Template.home.helpers({
	// getData:function(){
	// 	return data.find({});
	// },
    getData:function(){
        var arr=[];
        var query=6;
        var array=[];
        var nunberPage=Session.get('next');
        if(nunberPage){
          query=nunberPage*6;  
        }
        
        var items = data.find({},{limit:query});  
        //alert('itmes='+JSON.stringify(items));
        
        items.forEach(function(value){
            var obj={
                _id             : value._id,
                name            : value.name,
                image           : value.image,
                category        : value.category,
                perfume_pyramid :value.perfume_pyramid,
                accords         : value.accords,
                ratings         :value.ratings,
                peoplevote      :value.peoplevote,
                id_product      : value.id_product,
                Longevity       :value.Longevity,
                Sillage         : value.Sillage
            }
            arr.push(obj);
        });
        //alert('itmes='+JSON.stringify(arr));
        if(query<12){
            var start=0;
        }else{
            var start=query-6;
        }
        for(var i=start;i<query;i++){
            if(arr[i]){
                array.push(arr[i]);
            }
           
        }
        console.log('datapaginatoin='+JSON.stringify(array));
        return array;
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
