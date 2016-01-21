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
        return post.findOne({_id: this.params._id});
    }
});

Router.route('/',{
	name:'homefront'
});

Router.route('/manageCategory',{
	name:'manageCategory'
});

Router.route('/addcategory',{
	name:'addcategory'
});

Router.route('/updateCategory/:_id',{
    name: 'updateCategory',
    data: function(){
        var id = this.params._id;
        var da = category.findOne({_id: id });
        return da;
    }
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

Router.route('/admin',{
    name: 'adminmenu'
});
Router.route('/product/add',{
    name: 'addproduct'
});
Router.route('/product/edit',{
    name: 'editproduct'
});
Router.route('/product',{
    name: 'allproduct'
});
Router.route('/admin/adduser',{
    name: 'adduser'
});
Router.route('/admin/listuser',{
    name: 'listuser'
});