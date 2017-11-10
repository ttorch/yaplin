
Template.login.events({
    'click #aRegister':function(){
        Session.set('showRegister',true);
    },
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        console.log("Login Form submitted.");
        Meteor.loginWithPassword(emailVar, passwordVar, function(err) {
            if (err) {
                console.log('Something went wrong in loginWithPassword');
                console.log(err);
            } else {
                console.log('Success!');
                $("#accountPopUpWindow").modal('hide');
            }
        });
    }
});

