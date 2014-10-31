angular.module('sampleApp', 
	// modules
	['ngRoute', 'appRoutes', 'btford.socket-io',
	// controllers
	'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService'])
	

	// ref to finish implementation https://github.com/btford/angular-socket-io
	.factory('socketio', function(socketFactory){
		// catch errors
		return socketFactory;
	});