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

