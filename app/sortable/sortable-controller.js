app.controller('SortableCtrl', ['$scope', function($scope){
    
	$scope.setupList = function(){
		var size = $scope.listSize
		var rows = []
		for (var i=0; i<=size; i++){
		  rows.push({index: i})
		}
		$scope.rows = rows		
	}
	
	$scope.listSize=5
	$scope.setupList(5)
}])
