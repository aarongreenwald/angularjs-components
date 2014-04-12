'use strict';

var app = angular.module('app', [  
  'ngRoute',
  'ag.directives'
])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/navigable-table', {templateUrl: 'navigable-table/navigable-table.html'});  
  $routeProvider.when('/sortable', {templateUrl: 'sortable/sortable.html'});  
  $routeProvider.otherwise({redirectTo: '/'});
}]);


