myApp.controller('profileCtrl', function($scope, $routeParams, myFactory) {

$scope.profile = myFactory.getProfileByID($routeParams.profileID);

$scope.save = function(profile) {
	$scope.profile.$save();
}


});