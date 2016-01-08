angular.module('spacebookApp', [
  'friends',
  'newsfeed',
  'ngRoute'

])
 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/friends', {
        templateUrl: 'app/components/friends/friendsView.html',
        controller: 'FriendsCtrl'
      })
      .when('/newsfeed', {
        templateUrl: 'app/components/newsfeed/newsfeedView.html',
        controller: 'NewsfeedCtrl'
      })



    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
}])
