var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.doors = [{
  	title: "Red Door",
  	description: "A nice red door",
  	picture: "red_door.png"
  },{
  	title: "Blue Door",
  	description: "A nice blue door",
  	picture: "red_door.png"
  },{
  	title: "Green Door",
  	description: "A nice green door",
  	picture: "red_door.png"
  }];
}]);