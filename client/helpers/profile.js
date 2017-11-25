Template.profile.helpers({
    'gender': function(){
        return Meteor.staticCollection.gender;
    },
    'country': function(){
        return Meteor.staticCollection.country;
    }
})