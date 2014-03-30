app.controller('NavigableTableCtrl', ['$scope', function($scope){
		var items = []
		for (var i = 0; i<5; i++){
			items.push({})
		}
		$scope.items = items
		$scope.show = function(index){
			return !$scope.hideSome || index %2 ===0
		}
		
		$scope.modes = [{name: 'Excel', show:false, value: 'excel'},{name: 'Standard', show:true, value: ''}]
		$scope.toggleMode = function(){
			for (var i=0; i< $scope.modes.length; i++){
				$scope.modes[i].show = !$scope.modes[i].show
			}
		}
		
		$scope.modeName = function(shown){
			for (var i=0; i< $scope.modes.length; i++){
				if ($scope.modes[i].show === shown){
					return $scope.modes[i].name
				}
			}
		}
		
		}])
