'use strict';

var app = angular.module('app', [  
  'ngRoute',
  'ag.directives'
])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/navigable-table', {templateUrl: 'components/navigable-table.html'});  
  $routeProvider.otherwise({redirectTo: '/'});
}]);


