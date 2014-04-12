/***********************
Relies on jQuery and jQueryUI
 
Assumes ag.directives module already exists.
********************/
ag.directives.directive('agSortable', function() {
   return {
      restrict: 'A',      
      scope: {
        agSortList: '=',
        agIdColumn: '@',
        agSortColumn: '@'
      },
      link: function(scope, el, attrs, ngModel){
        
          var sortableElement = el
          scope.$watch(function(){return el},
            function(){
              var items = sortableElement.children()
              for (var i=0; i< items.length; i++){
        		        jQuery(items[i]).attr('data-ag-sort-index', scope.agSortList[i][scope.agIdColumn])
          		    }
            })
		       
		      
  		    jQuery(sortableElement).sortable({
        		      stop: function(){
        		        scope.$apply(function(){
        		          var items = sortableElement.children()
          		        for (var i=0; i< items.length; i++){
          		          //for each row i, assign i as the sort order
          		          //for the appropriate model value
          		          //that's the model value that has the same index as row i has
          		          for (var j=0; j < scope.agSortList.length; j++){
          		            if (scope.agSortList[j][scope.agIdColumn] == jQuery(items[i]).attr('data-ag-sort-index')){
          		                scope.agSortList[j][scope.agSortColumn] = i
          		                break
          		            }
          		          }          		          
    		              }  
        		        })
        		      } 
  		        })
  		      
  		                  
		      }
    }
})
