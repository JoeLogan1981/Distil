myApp.controller('chatCtrl', function($scope, myFactory, $rootScope) {

$scope.chat = myFactory.getChat();

$scope.post = function(message) {
	message.user = $rootScope.authData.password.email;
	$scope.chat.$add(message);
}

});