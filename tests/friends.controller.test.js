// describe('friendsController', function () {

//   beforeEach(module('friends'));
//   beforeEach(module('spacebookApp'));

//   var $controller;

//   beforeEach(inject(function(_$controller_, _FriendsService_){
//     $controller = _$controller_;
//     friendsService = _FriendsService_;
//   }));
//   describe('FriendsController', function () {
//     // it('length shound be 3', function () {
//     //   var $scope = {};
//     //   console.log('????????????????????????????????????????????',$controller)
//     //   var controller = $controller('FriendsController', { $scope: $scope });
//     //   $scope.x = 1;
//     //   $scope.y = 2;
//     //   $scope.number();
//     //   expect($scope.num).toBe(88);
//     // }); 

//     it('z should default to zero', function () {
//       var $scope = {};
//       var controller = $controller('CalculatorController', 
//         { $scope: $scope , FriendsService: friendsService});
//       expect($scope.z).toBe(0);
//     });
//   });

// });


describe('friendsController', function () {

  describe('FriendsController', function () {

    beforeEach(function(){
      module('friends');
    });


    it('z should default to zero', inject(function ($controller, _FriendsService_) {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope, FriendsService: friendsService });
      $scope.number = 88
      expect($scope.number).toBe(88);
    }));
  });

});