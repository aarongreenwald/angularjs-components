app.controller('SortableCtrl', ['$scope', function($scope){
    var rows = []
    for (var i=0; i<=50; i++){
      rows.push({index: i})
    }
	$scope.rows = rows
}])
