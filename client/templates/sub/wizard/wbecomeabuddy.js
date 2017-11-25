Template.becomeabuddy_wizard.onCreated(function() {
    document.title = "Yaplin - Become a buddy - Form";
    console.log('becomeabuddy_wizard ON CREATED ' + Meteor.userId());
    this.autorun(() => {
        this.subscribe('buddies.public', Meteor.userId());
    });
});

Template.becomeabuddy_wizard.events({

    'submit form': function(event) {
        event.preventDefault();
        console.log('UPDATING PROFILE');
        data = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            alias: event.target.alias.value,
            gender: event.target.gender.value,
            dateofbirth: event.target.dateofbirth.value,
            contact: event.target.contact.value,
            street: event.target.street.value,
            city: event.target.city.value,
            country: event.target.country.value
        }
        //console.log(data);
        Meteor.call('UpdateProfile', data, function(error, response){

            if (error){
                console.log('UPDATE PROFILE ERROR');
                console.log(error);
            } else {
                
                data = {
                    about: event.target.about.value
                }
                console.log(data);
                Meteor.call('BecomeABuddy', data, function(error, response){
                    if (error){
                        console.log('CREATE A BUDDY ERROR');
                        console.log(error);
                        return;
                    }

                    console.log('SUCCESSFULLY UPDATED AND CREATED...');
                    console.log(response);
                });

                
            }
        });        
    }
});

