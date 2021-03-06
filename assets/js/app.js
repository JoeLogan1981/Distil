var myApp = angular.module('myApp', ["firebase", "ngRoute", "ngCsvImport"]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      }).

      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
      }).

      when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      }).

      when('/seo/:seoID', {
        templateUrl: 'views/seo-report.html',
        controller: 'seoCtrl'
      }).

        when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'chatCtrl'
      }).

      when('/profile/:profileID', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      }).

      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).

      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      }).

      otherwise({
        redirectTo: '/'
      });

  }]);

myApp.run(function($rootScope) {
  $rootScope.firsttimeuser = false;
})
