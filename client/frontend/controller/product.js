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
        var date = new Date();
        var text = tlp.$('#comment').val();
        var userId = Meteor.userId();
        var type = "My type of products";
        var object={
            comments:[
                {
                     text:text, 
                     date:date,
                     user:Meteor.userId()
                }
            ]    
        }
        if(userId){
            Meteor.call('updateComment',id,object);
        }else{
            alert("Please login");
        }
        
        //post.update(this._id,object);
        
    },
    'click #like':function(e){
        e.preventDefault();
        var id = this._id;
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
                     $("#like").addClass("hidden");
                    $("#unlike").removeClass("hidden");
                }
            }); 
        }
    },
    'click .unlike':function(e){
        e.preventDefault(); 
        var id=this._id;
        var user = Meteor.userId();
        Meteor.call("deleteFavorite",id,user,function(error){
            if(error){console.log("ERROR DELETE FAVORITE"+error.reason())}
            else{
                $('#unlike').addClass('hidden');
                $('#like').removeClass('hidden');
            }
        });
    // "click .clickHere":function(e){
    //     $(e.currentTarget).next(".hideCom").toggle();
        
    // }
    },
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
    getAllproduct:function(){
        return products.find();
    }
    ,
    getFavorite:function(){
        var id = this._id;
        var user = Meteor.userId();
        return favorite.find({proId:id}).count();
    },
    currentlike:function(){
        var user = Meteor.userId();
        var result = favorite.findOne({proId:this._id,userId:user});
        var userId = result.userId;
        var pro = result.proId;
        if(user == userId && pro == this._id)
            return "Unlike";
        else
            return "Like";
        console.log("DATARESULT="+pro);
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

    getPerform:function(){ 
        var result= data.find();
        return result;
},
    getAccord:function(){
        return data.find();
    }
});
Template.details.helpers({
    getProductRelated:function(){
        var id = this._id;
        var catId =this.category;
        //var myLimit = limit || 5;
        return data.find({$and:[{category:catId},{_id:{$ne:id}}]});
    },
    getUserComment:function(userId){
        var result = users.findOne({_id:userId});
        return result.profile.firstname;
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
    getComment:function(cmt){
        return cmt.slice(0,5);
    },
    getReview:function(id){
        var a = review.find({dataId:id},{limit:6});
        return a;
    },
    getdata:function(id){
        return data.find({_id:id});
    },
    getprofileReview:function(userId){;
        var getuser = Meteor.users.findOne({_id:userId});
        var img = images.findOne({_id:getuser.profile.avatar});
        if(img){
            return img.copies.images.key;
        }else{
            return "default_avatar.jpg";
        }
    }

});

Template.details.events({
     "click #add-review": function(e,tlp){
        e.preventDefault();
        var today = new Date();
        var date = today.getDate();
        var text = tlp.$('#review').val();
        var author = Meteor.userId();
        var productId = this._id;
        var score = Session.get("SCORE");
        var url = "";
        var websiteName = "";
        //alert("GEt DATA Revew "+text+" "+userId+" "+score+" "+productId);
        var object={
                text        :text,   
                author      :author,
                date        :date,
                id_product   :productId,
                type         : "user",
                score       :score,
                url         : url,
                websiteName : websiteName
        }
        //alert(object);
        //Meteor.call('insertReview',object);
        if(confirm('Are you sure you want to insert???') || userId){
            Meteor.call('insertReview',object,function(error){
                if(error){console.log("ERROR"+error.reason())}
                else{
                    console.log("SUCCESS");
                    $("#comment").val("");
                }
            });
        }else{
            alert("Please login");
        }
    },
    "click i.fa-star-o":function(e){
        e.preventDefault();
        var userId = Meteor.userId();
        var star= $(e.currentTarget).attr("value");
        alert("my rate:"+star);
        Session.set("SCORE",star);
    }

});



Template.perfumeDetail.helpers({
    getIcon:function(feel){
        console.log("MY FEELING IS "+feel);
        if ( feel == "love" ) 
            return "/images/img1.png";
        else if ( feel == "like" ) 
            return "/images/img2.png";
        else if ( feel == "dislike" ) 
            return "/images/img3.png";
        else if ( feel == "winter" )
            return "/images/img4.png";
        else if ( feel == "spring" )
            return "/images/img5.png";
        else if ( feel == "summer" )
            return "/images/img6.png";
        else if ( feel == "fall" )
            return "/images/img7.png";
        else if ( feel == "day" )
            return "/images/img8.png";
        else if ( feel == "night" )
            return "/images/img9.png";
    },
    getFeelColor:function(color){
        if ( color == "love" ) 
            return "progress-bar";
        else if ( color == "like" ) 
            return "progress-bar-a";
        else if ( color == "dislike" ) 
            return "progress-bar-b";
        else if ( color == "winter" )
            return "progress-bar-c";
        else if ( color == "spring" )
            return "progress-bar-e";
        else if ( color == "summer" )
            return "progress-bar-f";
        else if ( color == "fall" )
            return "progress-bar-g";
        else if ( color == "day" )
            return "progress-bar-h";
        else if ( color == "night" )
            return "progress-bar-i";
    }
});

Template.viewAllComment.helpers({
    getUserComment:function(userId){
        var result = users.findOne({_id:userId});
        return result.profile.firstname;
    }
});
Template.viewAllReview.helpers({
    getReview:function(){
        var id = this._id;
        return review.find({dataId:id});
    },
    getUserComment:function(userId){
        var result = users.findOne({_id:userId});
        return result.profile.firstname;
    }
});


