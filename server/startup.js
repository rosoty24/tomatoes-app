Meteor.startup(function () {
  if(!Meteor.users.find().count()) {
    var options = {
      username: 'admin', 
      password: 'admin', 
      email: 'admin@gmail.com'
    };
    Accounts.createUser(options);
  }
});
