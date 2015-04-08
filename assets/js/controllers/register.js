myApp.controller('registerCtrl', function($scope, $rootScope, $location) {

var ref = new Firebase("https://chatbotyo.firebaseio.com/");

$scope.register = function(user) {

	ref.createUser(user, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    login(user);
	    $rootScope.firsttimeuser = true;
	    $rootScope.$apply();
	  }
});

}

var login = function(user) {
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