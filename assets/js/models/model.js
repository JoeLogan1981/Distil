myApp.factory('myFactory', function($firebaseObject, $firebaseArray) {
	var ref = new Firebase('https://chatbotyo.firebaseio.com/')
	return {
		getProfileByID: function(userid) {
			var ref = new Firebase("https://chatbotyo.firebaseio.com/users/" + userid );
			return $firebaseObject(ref);
		},
		getChat: function() {
			var ref = new Firebase('https://chatbotyo.firebaseio.com/chat');
			return $firebaseArray(ref);
		},
		saveSeo: function() {
			var ref = new Firebase('https://chatbotyo.firebaseio.com/seo');
			return $firebaseArray(ref);
		},
		getReport: function(seoid) {
			var ref = new Firebase('https://chatbotyo.firebaseio.com/seo/'  + seoid );
			return $firebaseObject(ref);
		},
	};
});
