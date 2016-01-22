Router.configure({
    layoutTemplate: 'mainLayout',
});

Router.route('/submit',{
	name: 'submit'
});
Router.route('/managesubmit',{
	name: 'managesubmit'
});
Router.route('/updatesubmit/:_id', {
    name: 'updatesubmit',
    data: function(){
        return products.findOne({_id: this.params._id});
    }
});

Router.route('/',{
	name:'homefront'
});
Router.route('/manageAdvertise',{
    name:'manageAdvertise'
});

Router.route('/addadvertise',{
    name:'addadvertise'
});

Router.route('/updateAdvertise/:_id',{
    name: 'updateAdvertise',
    data: function(){
        var id = this.params._id;
        var da = advertise.findOne({_id: id });
        return da;
    }
});
Router.route('/header', {
    name: 'header'
});
Router.route('/footer', {
    name: 'footer'
});

Router.route('/login',{
	name: 'login'
});
Router.route('/profileAuthor/:_id' ,{
    name: 'profileAuthor',
    data:function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});

Router.route('/editprofileAuthor',{
    name: 'editprofileAuthor',
    data: function(){
        return Meteor.users.findOne({_id:Meteor.userId()});
    }
});
// Router.route('/homefront',{
//     name'homefront'
// });

Router.route('/admin/adduser',{
    name: 'adduser'
});
Router.route('/admin/listuser',{
    name: 'listuser'
});

Router.route('/productDetail/:_id',{
    name:'productDetail',
     data:function(){
        return products.findOne({_id: this.params._id});
    }
});

