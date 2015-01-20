sample.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/allExp");
	$stateProvider.state('allExp', {
		url : "/allExp",
		templateUrl : "app/allExperiment/allExp.html",
		controller : 'allExperiment'
	}).state('newExp', {
		url : "/newExperiment",
		views : {
			'' : {
				templateUrl : "app/newExperiment/newExp.html",
				controller : 'newExperiment'
			},
			'.workflow@newExp' : {
				templateUrl : 'app/newExperiment/status/status.html'
			},
			'.details@newExp' : {
				templateUrl : 'app/newExperiment/expDetails/expDetails.html'
			}
		}
	}).state('about', {
		url : "/about",
		templateUrl : "app/about/about.html",
		controller : 'about'
	});
});
