angular.module('MainCtrl', ['btford.socket-io']).controller('MainController',
	function($scope, socketio) {
	
	$scope.tagline = 'To the moon and back!';

});