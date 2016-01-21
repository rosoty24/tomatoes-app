Template.header.events({
    'keyup .text': function (){
        var txt = $('.text').val();
        if(txt) {
            Router.go('/search');
        } else {
            var mysearch = Session.get('mycurrent');
            console.log('MYSEARCH:'+mysearch);
            Router.go(mysearch);
        } 
    },
    'focus .text':function(){
        //alert('hello');
        var currentpath = Iron.Location.get().path;
        Session.set('mycurrent',currentpath);
        //alert(currentpath);
    }
});

Template.searchBox.helpers({
    getpost:function(){
        var postId = this.post;
        return post.find({_id:postId});
    }
});