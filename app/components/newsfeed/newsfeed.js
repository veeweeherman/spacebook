angular.module('newsfeed',['ngRoute'])
	.service("NewsfeedService", function(){
		// sample data of home user's friends and their statuses
		var newsfeed = [{'user': "Tom Jones", 'message': "abc"}, {'user': "Dick Tracy", 'message': "xyz"}, {'user': "Harry Metsally", 'message': "123!"}];
		// returns list of friends and statuses
		this.list = function(){
			return newsfeed;
		}
	})
  .controller("NewsfeedController", [ '$scope', 'NewsfeedService', function($scope, NewsfeedService){ 
    $scope.newsfeed = NewsfeedService.list();

  }])
