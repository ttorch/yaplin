
Template.register.events({
    'click #aLogin':function(){
        Session.set('showRegister',false);
    },
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var firstNameVar = event.target.firstname.value;
        var lastNameVar = event.target.lastname.value;
        var passwordVar = event.target.password.value;
        console.log("Sign up Form submitted.");
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
                firstName: firstNameVar,
                lastName: lastNameVar,
                isActive: 0
            }  
        }, function(err){
            if (err) {
                console.log("Register Fail!")
                console.log(err)
              } else {
                console.log("Register Success!")
                $("#accountPopUpWindow").modal('hide');
              }
        });

        
        console.log(emailVar, firstNameVar, lastNameVar, passwordVar);
    }
});

