Template.adduser.events({
	'click #btnuser': function(e){
        e.preventDefault();
        //alert();
        var username = $('#username').val();
        var fname = $('#firstname').val();
        var lname = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var mySelect = $('#mySelect').val();
        alert(username+fname+lname+email);
        Meteor.call('addUser',username,fname,lname,email,password,mySelect);
        //Router.go('project');
    }
});
Template.adduser.helpers({
	getRoles:function(){
        var result= Meteor.roles.find();
        console.log("My Role :"+JSON.stringify(result));
        return result;
    }
});
Template.listuser.helpers({
    listuser:function(){
        var a = Session.get("count");
        a++;
        var allUser = Meteor.users.find({});
        return allUser;
    }
});
Template.listuser.events({
    'click #remove': function(e){
        e.preventDefault();
        var id = this._id;
        Meteor.call('deleteUser', id);
        
    }
});
Template.adduser.events({
    'click #edituser': function(e){
        e.preventDefault();
        //alert();
        var id = this._id;
        var username = $('#username').val();
        var fname = $('#firstname').val();
        var lname = $('#lastname').val();
        var email = $('#email').val();
        var mySelect = $('#mySelect').val();
        //alert(username+fname+lname+email);
        var obj={
            profile:{username:username,fname:fname,lname:lname},
            email:email,
            mySelect:mySelect
        }
        Meteor.call('addUser',id,obj);
        Router.go('/admin/manageCategory');
    }
});

