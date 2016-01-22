Meteor.methods({
    addUser:function(username,fname,lname,email,password,mySelect){
        targetUserId=Accounts.createUser({
            email: email,
            password: password,
            profile:{
              username:username,
              firstname:fname,
              lastname:lname
            }
       });
    Roles.setUserRoles(targetUserId, [mySelect])
   },
   deleteUser: function (id) {
      return Meteor.users.remove(id);
   },
   editUser:function(id,obj){
      Meteor.users.update({_id:id},{$set: obj});
   }
});