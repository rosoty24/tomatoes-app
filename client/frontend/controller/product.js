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
        
        //post.update(this._id,object);
        
    },
    // "click .clickHere":function(e){
    //     $(e.currentTarget).next(".hideCom").toggle();
        
    // }
    'click #love':function(e){
        e.preventDefault();
        var id = this._id;
        //alert(id);
        var user = Meteor.userId();
        //alert(user);
        var obj={
            proId:id,
            userId:user,
            status : 1
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertLove",obj);
            // Meteor.call("insertFavorite",obj,function(error){
            //     if(error){console.log("ERROR INSERT FAVORITE"+error.reason())}
            //     else{
            //         $("#like_"+id).addClass("hidden");
            //         $("#unlike_"+id).removeClass("hidden");
            //     }
            // }); 
        }
    },
    'click #like':function(e){
        e.preventDefault();
        var id = this._id;
        //alert(id);
        var user = Meteor.userId();
        //alert(user);
        var obj={
            proId:id,
            userId:user,
            status : 2
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertLike",obj);
        }
    },
    'click #dislike':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 3
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertDislike",obj);
        }
    },
    'click #winter':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 4
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertWinter",obj);
        }
    },
    'click #spring':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 5
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertSpring",obj);
        }
    },
    'click #summer':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 6
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertSummer",obj);
        }
    },
    'click #fall':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 7
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertFall",obj);
        }
    },
    'click #day':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 8
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertDay",obj);
        }
    },
    'click #night':function(e){
        e.preventDefault();
        var id = this._id;
        var user = Meteor.userId();
        var obj={
            proId:id,
            userId:user,
            status : 9
         }
         if(!user){
            alert("Login First Before Click on this button");
            Router.go("/login");
         }else{
            Meteor.call("insertNight",obj);
        }
    }
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
    },
    getAccord:function(){
        return data.find();
    }
});