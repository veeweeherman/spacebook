angular.module('spacebookApp', [
  'friends',
  'newsfeed',
  'status',
  'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/friends', {
        templateUrl: 'app/components/friends/friendsView.html',
        controller: 'FriendsController'
      })
      .when('/newsfeed', {
        templateUrl: 'app/components/newsfeed/newsfeedView.html',
        controller: 'NewsfeedController'
      })
      .when('/status', {
        templateUrl: 'app/components/status/statusView.html',
        controller: 'StatusController'
      })

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
}])
