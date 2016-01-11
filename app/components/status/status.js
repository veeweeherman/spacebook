angular.module('status', ['ngRoute'])
	.service('StatusService', function () {
    // Home user's sample data of past statuses
    var uid = 2;
    var statuses = [
    	{
        id: 0,
        'status': 'Woo! Just ran 10 miles and NEED FOOD!',
			},
			{
        id: 1,
        'status': 'Can\'t seem to get out of bed!',
			},
    ];
    
    // give every new status a unique id and save into the statuses array
    this.save = function (status) {
      if (status.id == null) {
        status.id = uid++;
        statuses.push(status);
      } else {
          for (i in statuses) {
            if (statuses[i].id == status.id) {
              statuses[i] = status;
            }
          }
      }
    }

    // in order to edit a past status, get the id of the clicked status and return its status string
    this.get = function (id) {
        for (i in statuses) {
            if (statuses[i].id == id) {
                return statuses[i];
            }
        }

    }
    
    // with the id of the chosen status, delete from the array
    this.delete = function (id) {
        for (i in statuses) {
            if (statuses[i].id == id) {
                statuses.splice(i, 1);
            }
        }
    }

    // return statuses
    this.list = function () {
        return statuses;
    }
	})

	.controller('StatusController', function ($scope, StatusService) {

    $scope.statuses = StatusService.list();

    $scope.saveStatus = function () {
      StatusService.save($scope.newstatus);
      $scope.newstatus = {};
    }

    $scope.delete = function (id) {
      StatusService.delete(id);
      if ($scope.newstatus.id === id) $scope.newstatus = {};
    }


    $scope.edit = function (id) {
      $scope.newstatus = angular.copy(StatusService.get(id));
    }
	})
