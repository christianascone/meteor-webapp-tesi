// Default layout template for logged user
Router.configure({
	layoutTemplate: 'main'
});

// Layout template for login/register pages
Router.configure({
	layoutTemplate: 'home'
});

Router.route('/', {
	name: 'welcome',
	template: 'welcome',
	layoutTemplate: 'main'
});

Router.route('/register', {
	name: 'register',
	template: 'register',
	// None template for login page
	layoutTemplate: 'home'
});

Router.route('/login', {
	name: 'login',
	template: 'login',
	// None template for login page
	layoutTemplate: 'home'
});

Router.route('/debug', {
	name: 'debug',
	template: 'debug',
	layoutTemplate: 'main'
});

Router.route('/leaderboard', {
	name: 'leaderboard',
	template: 'leaderboard',
	layoutTemplate: 'main'
});

Router.route('/memory', {
	name: 'memory',
	template: 'memory',
	layoutTemplate: 'main'
});

Router.route('/survey/:_bias', {
	name: 'survey',
	template: 'survey',
	layoutTemplate: 'none'
});