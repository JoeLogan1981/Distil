myApp.controller('loginCtrl', function($scope, $location, $rootScope) {

var ref = new Firebase("https://chatbotyo.firebaseio.com/");

$scope.login = function(user) {
		$rootScope.firsttimeuser = false;
		ref.authWithPassword(user, 
		function(error, authData) {
		  if (error) {
		    console.log(error);
		  } else {
		    $location.path('/profile/' + authData.uid);
    		$scope.$apply();
		  }
	});
}


});