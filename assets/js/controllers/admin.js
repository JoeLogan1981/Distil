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

  $scope.report = myFactory.getReport($routeParams.seoID);

  $scope.$watch("report.content", function() {
    var lines, lineNumber, data, length;
    $scope.reportdata = [];
    lines = $scope.report.content.split('\n');
    for (var i = lines.length - 1; i >= 0; i--) {
        l = lines[i];
        data = l.split(',');
        var sku = data[0];
        var image = data[1];
        var label = data[2];
        $scope.reportdata.push({
          sku: sku,
          image: image,
          label: label,
        });
    }
  });


});
