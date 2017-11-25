Meteor.publish('buddies.public', function() {
    if (!this.userId){
        return this.ready();
    }
    return BuddyCollection.find(
        { userId: this.userId },
        { fields: {'about':1} }
    ); 
});

