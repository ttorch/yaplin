
Template.register.onRendered(function(){
    $('#app-signup').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            firstname: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: 'Email field is required.',
                email: 'Please enter a valid email address.'
            },
            firstname: {
                required: 'First Name field is required.',
                minlength: 'Please enter at least 2 characters.'
            },
            password: {
                required: 'Password field is required.',
                minlength: 'Please enter at least 6 characters.'
            }
        }
    })
});

Template.register.events({
    'click #aLogin':function(){
        Session.set('showRegister',false);
    },
    'submit form': function(event) {
        event.preventDefault();
        var data = {
            email: event.target.email.value, 
            password: event.target.password.value,
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value
        }
        
        console.log("1Sign up Form submitted.");
        Meteor.call('Signup', data, function (error, response) {
            if (error) {
                console.log("1 Register Fail!");
                console.log(error);
            } else {
                console.log("1 Register Success!");
                console.log(response);
                $("#accountPopUpWindow").modal('hide');
            }
        });
        
        // var emailVar = event.target.email.value;
        // var firstNameVar = event.target.firstname.value;
        // var lastNameVar = event.target.lastname.value;
        // var passwordVar = event.target.password.value;
        // Accounts.createUser({
        //     email: emailVar,
        //     password: passwordVar,
        //     profile: {
        //         firstName: firstNameVar,
        //         lastName: lastNameVar,
        //         isActive: 0
        //     }  
        // }, function(err){
        //     if (err) {
        //         console.log("Register Fail!")
        //         console.log(err)
        //       } else {
        //         console.log("Register Success!")
        //         $("#accountPopUpWindow").modal('hide');
        //       }
        // });
        //console.log(emailVar, firstNameVar, lastNameVar, passwordVar);
    }
});

