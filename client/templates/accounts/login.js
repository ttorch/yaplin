
Template.login.onRendered(function(){
    $('#app-login').validate({
        rules: {
            loginEmail: {
                required: true,
                email: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
            loginEmail: {
                required: 'Please enter your email address to login.',
                email: 'Please enter a valid email address.'
            },
            loginPassword: {
                required: 'Please enter your password to login.'
            }
        }
    })
});

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

