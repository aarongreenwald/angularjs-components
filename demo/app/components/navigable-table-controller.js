app.controller('NavigableTableCtrl', ['$scope', function($scope){
		var roster = []
		for (var i = 0; i<5; i++){
			roster.push({})
		}
		$scope.roster = roster
		$scope.show = function(index){
			return !$scope.hideSome || index %2 ===0
		}
		}])
