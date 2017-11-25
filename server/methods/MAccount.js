Meteor.methods({
    Signup : function(user) {
        try {
            var result = Accounts.createUser({
                email: user.email,
                password: user.password,
                isActive: 0,
                profile: {
                    firstName: user.firstname,
                    lastName: user.lastname,
                    alias: "",
                    gender: "",
                    dob: "",
                    age: 0,
                    contact: "",
                    street: "",
                    city: "",
                    country: ""
                }  
            });

            if(result){
                return result;
            }
        } catch (ex) {
            console.log("METHODS ERROR: ");
            console.log(ex);
            throw new Meteor.Error(ex);
        }
    }

    
});