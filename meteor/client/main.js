import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import {
	Session
} from 'meteor/session';
import {
	TAPi18n
} from 'meteor/tap:i18n';

dialogPolyfill = require('dialog-polyfill');

import './main.html';

// Helpers for logout template
Template.main.helpers({
	/**
	 * Function to execute after main template done loading
	 * @return {void}
	 */
	afterLoad() {
		var user = Meteor.user();
		if (!user) {
			console.log("No logged user found.");
			Router.go('login');
			return;
		}
		var userId = user._id;
		// Search player with user id
		var loggedPlayer = undefined;
		if (Players.findOne()) {
			loggedPlayer = Players.findOne().byUserId(userId);
		}

		// Read email from logged user
		var email = null;
		if (user && user.emails) {
			email = user.emails[0];
		}

		// If no players with given userId are found, a new one is created
		if (!loggedPlayer) {
			var result = Players.createPlayer(email, userId);
			console.log(result);
		} else {
			console.log("Existing player with userId: " + userId);
		}
	},
	/**
	 * Gets first email address of logged user
	 * @return {String} Email address of logged user
	 */
	loggedUserEmail() {
		var user = Meteor.user();
		if (!user || !user.emails) {
			return null;
		}
		return user.emails[0].address;
	},
	currentPlayer() {
		var user = Meteor.user();
		if (!user) {
			console.log("No logged user found.");
			Router.go('login');
			return;
		}
		var userId = user._id;
		// Search player with user id
		var loggedPlayer = undefined;
		if (Players.findOne()) {
			loggedPlayer = Players.findOne().byUserId(userId);
		}

		return loggedPlayer;
	}
});

Template.logout.events({
	'click .logout' (event, instance) {
		event.preventDefault();
		Meteor.logout(function(err) {
			Router.go('login');
		});
	}
});