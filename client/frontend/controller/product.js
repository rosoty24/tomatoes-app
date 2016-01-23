Template.disProduct.helpers({
    displayPro:function(){
        var id = this._id;
        console.log("CATID="+id);
        return products.find({category:id});
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
    getFavorite:function(id){
        //var id = this._id;
        return favorite.find({proId:id}).count();
    }

});
Template.disProduct.events({
    'click .like':function(e){
        e.preventDefault();
        var id = this._id;
        alert(id);
        var user = Meteor.userId();
        //alert("This is my like:"+id);
        var obj={
            proId:id,
            userId:user
         }
         if(!user){
            alert("Login First Before Like");
            Router.go("/login");
         }else{
            Meteor.call("insertFavorite",obj,function(error){
                if(error){console.log("ERROR INSERT FAVORITE"+error.reason())}
                else{
                    $("#like_"+id).addClass("hidden");
                    $("#unlike_"+id).removeClass("hidden");
                }
            }); 
        }
    },
    'click .unlike':function(e){
        e.preventDefault(); 
        var id=this._id;
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        Meteor.call("deleteFavorite",id,obj,function(error){
            if(error){console.log("ERROR DELETE FAVORITE"+error.reason())}
            else{
                $('#unlike_'+id).addClass('hidden');
                $('#like_'+id).removeClass('hidden');
            }
        });
    }
});

// comment and review
Template.productdetails.events({
    "click #submit": function(e,tlp){
        e.preventDefault();
        var id = this._id;
        alert("id "+id);
        var date = new Date();
        var text = tlp.$('#comment').val();
        var userId = Meteor.userId();
        var type = "My type of products";
        var object={
            comments:
                {
                     text:text, 
                     date:date, 
                     userId:Meteor.userId(), 
                     type:type
                }
        }
        if(userId){
            Meteor.call('updatePro',id,object);
        }else{
            alert("Please login");
        }
    },
});
Template.productdetails.helpers({
    getPostCom:function(){
        var id = this._id;
        var result= products.find({_id:id});
        return result;
    },
    getReview:function(){
        var id = this._id;
        console.log("MY ID IS "+id);
        var result = review.find({productId:id});
        console.log(" MY RESTLT IS "+result);
        return result;
    },
    getUserReview:function(userId){
        var result = users.findOne({_id:userId});
        return result.profile.firstname;
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
    }
});