Meteor.methods({
    BecomeABuddy : function(details) {
        try {
            var currentUserId = Meteor.userId();
            console.log('CREATE BUDDY METHOD');
            console.log(currentUserId);
            console.log(details);
            return BuddyCollection.insert({
                userId: currentUserId,
                about: details.about,
                createAt: new Date(),
                verified: false,
                verifiedAt: null,
                verifiedBy: null
            });
            
        } catch (ex) {
            throw new Meteor.Error(ex);
        }
    }
});