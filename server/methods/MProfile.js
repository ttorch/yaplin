Meteor.methods({

    UpdateProfile : function(profile) {
        try {
            if (!Meteor.userId()){
                throw new Meteor.Error('Not authorized!');
            }
            console.log(profile);
            var currentUserId = Meteor.userId();
            console.log("Updating Profile: " + currentUserId);

            var result = Meteor.users.update(Meteor.userId() ,{
                $set: {
                    profile: {
                        firstName: profile.firstname,
                        lastname: profile.lastname,
                        alias: profile.alias,
                        gender: profile.gender,
                        dob: profile.dateofbirth,
                        contact: profile.contact,
                        street: profile.street,
                        city: profile.city,
                        country: profile.country
                    }
                }              
            });

            if (result)
                return currentUserId;
        } catch (ex) {
            throw new Meteor.Error(ex);
        }
        
    }
});
