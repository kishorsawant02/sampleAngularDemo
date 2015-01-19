 angularDemo.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'script/login/login.html',
                    controller: 'loginController'
                }).
                when('/home', {
                    templateUrl: 'script/home/home.html',
                    controller: 'homeController'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);
