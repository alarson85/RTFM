angular.module('rtfmApp', ['ui.router', 'firebase'])

.constant('fb', {
	url: 'https://chatroomnv.firebaseio.com/'})

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/threads')
	$stateProvider
		.state('threads', {
			url: '/threads'
			, templateUrl: './threads.html'
			, controller: 'threadsCtrl'
			, resolve: {
				threadsRef: function(threadsService){
					return threadsService.getThreads();
				}
			}
		})
		// .state('thread', {
		// 	url: '/threads/:threadId'
		// 	, templateUrl: '/thread.html'
		// 	, controller: 'threadCtrl'
		// 	, resolve: {
		// 		threadRef: function($stateParams, threadsService){
		// 			return threadsService.getThread($stateParams.threadId);
		// 		}
		// 	}
		// })

})