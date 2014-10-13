angular
	.module('app', [
		'ui.router'
		])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})

		$stateProvider
			.state('rules', {
				url: '/rules',
				templateUrl: 'templates/rules.html'
			})

		$stateProvider
			.state('gallery', {
				url: '/gallery',
				templateUrl: 'templates/gallery.html'
			})

		$stateProvider
			.state('schedule', {
				url: '/schedule',
				templateUrl: 'templates/schedule.html'
			})

		$stateProvider
			.state('charms', {
				url: '/charms',
				templateUrl: 'templates/charms.html'
			})

		$stateProvider
			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts.html'
			})

		$stateProvider
			.state('menager', {
				url: '/menager',
				templateUrl: 'templates/menager.html'
			})

	}])