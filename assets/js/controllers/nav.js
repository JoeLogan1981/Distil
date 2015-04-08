myApp.controller('navCtrl', function($scope, $rootScope) {

var ref = new Firebase("https://chatbotyo.firebaseio.com/");
ref.onAuth(authDataCallback);

function authDataCallback(authData) {
  if (authData) {
    $scope.isLoggedIn = authData;
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
    $rootScope.authData = authData;

  } else {
    $scope.isLoggedIn = false;
  }
}

$scope.logout = function() {
	ref.unauth();
}



});