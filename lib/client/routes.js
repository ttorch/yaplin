// Import needed templates
import '../../imports/ui/layouts/default/default.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', { top: 'header', main: 'home', bottom: 'footer' });
    }
});

FlowRouter.route('/what-we-do', {
    name: 'whatwedo',
    action() {
        BlazeLayout.render('default', { top: 'header', main: 'whatwedo', bottom: 'footer' });
    }
});

FlowRouter.route('/become-a-buddy', {
    name: 'becomeabuddy',
    action() {
        BlazeLayout.render('default', { top: 'header', main: 'becomeabuddy', bottom: 'footer' });
    }
});

FlowRouter.notFound = {
    action: function() {
    console.log('rendering myTemplate2');
    //BlazeLayout.render('myTemplate2');
    }
};
