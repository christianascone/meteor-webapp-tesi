Template.login.helpers({
	/**
	 * Function to execute after login template done loading
	 * @return {void}
	 */
	afterLoad() {
		var user = Meteor.user();
		if (user) {
			console.log("Logged user found.");
			Router.go('welcome');
		}
	}
});

// Events for login template
Template.login.events({
	// submit action on form element
	'submit form': function(event) {
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		// Login with given data
		Meteor.loginWithPassword(email, password, function(error) {
			if (error) {
				console.log(error);
				Blaze._globalHelpers.showToast("Login failed: " + error.reason);
			} else {
				Logs.log("Logged in");
				Router.go('welcome');
			}
		});
	},
	/**
	 * Click event for register button.
	 * Goes to register page
	 * 
	 * @param  {Event} event Click event
	 * @return {void}       
	 */
	'click #register-button': function(event) {
		event.preventDefault();
		Router.go("register");
	}
});