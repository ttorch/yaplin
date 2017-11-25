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

FlowRouter.notFound = {
    action: function() {
    console.log('rendering Page 404');
    //BlazeLayout.render('myTemplate2');
    }
};


var becomeabuddyRoutes = FlowRouter.group({
    prefix: '/become-a-buddy'
})

becomeabuddyRoutes.route('/',{
    name: 'becomeabuddy',
    action() {
        BlazeLayout.render('default', { top: 'header', main: 'becomeabuddy', bottom: 'footer' });
    }
})

becomeabuddyRoutes.route('/wizard',{
    name: 'becomeabuddy.wizard',
    action() {
        BlazeLayout.render('default', { top: 'header', main: 'becomeabuddy_wizard', bottom: 'footer' });
    }
})