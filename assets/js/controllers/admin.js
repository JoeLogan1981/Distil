myApp.controller('adminCtrl', function($scope, myFactory) {
  $scope.csv = {
    name: null,
    content: null,
    header: true,
    separator: ',',
    result: null
  };
  $scope.reportlist = myFactory.saveSeo();

  $scope.$watch('csv.content', function() {
    $scope.reportlist.$add({
      name: $scope.csv.name,
      content: $scope.csv.content,
    });
  });


});
 

myApp.controller('seoCtrl', function($scope, $routeParams, myFactory) {

// Grab the data from the factory

var data = myFactory.getReport($routeParams.seoID);

// When it has loaded asyncrously, execute the following

data.$loaded().then(function() {

  // Split the data from firebase into individual items with the newline delimiter

  var array = data.content.split('\n');

  // Initialise the reportdata array on the scope

  $scope.reportdata = [];

  // For loop counting along the length of the array, each time creating a new object
  // and pushing it onto the reportdata array

  for (var i = 0; i < array.length; i++) {
    var keys = array[i].split(',');
    var obj = {
      sku: keys[0],
      image: keys[1],
      label: keys[2]
    }
    $scope.reportdata.push(obj);
  };
  
});





});
