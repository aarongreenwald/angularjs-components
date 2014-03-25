
/********
Usage: add 'ag-navigable-table' attribute to the tbody or table element.
You will be able to navigate the table with your arrow keys. Only cells with input boxes within them will be 
accessible, all others will be skipped. If there's more than one input in a given cell (TD), only the first
will be accessible.The header won't be included, perhaps support for that will be added later.

textareas and contenteditable divs are not yet supported. 

No dependencies, tested in Chrome and FF. Tables with rows that have varying colspans have not yet been tested. All bets are off.

The arrow key event is cancelled when navigation occurs. This means that for numeric inputs, the spinners the browsers provide
will only work on the first and last rows of each column.
****************/ 

angular.module('ag.directives', []).directive('agNavigableTable', function() {
   return {
      restrict: 'A',      
      link: function(scope, el){
		  var firstVisibleInput = function(node, tdIndex){			  
			  if (tdIndex !== undefined){
				  node = node.children[tdIndex] //todo what if there are varying colspans?				  
			  }
			  if (node){
				  var descendants = node.getElementsByTagName('*')				  
					  for (var i = 0; i < descendants.length; i++){
						  if (descendants[i].nodeName === 'INPUT'								
								&& descendants[i].offsetHeight > 0 && descendants[i].offsetWidth > 0 //the input is actually visible
						  ){
							  return descendants[i]						  
						  }
					  }
				  }			  
			  return undefined
		  }
		  
		  el.bind('keydown', function(event){
			  var keys = {left: 37, up: 38, right: 39, down: 40}			  			 
			  var key = event.which
			  
			  //start at the currently focused element, must be an input for this to continue
			  var startInput = document.activeElement 			  
			  if (startInput.nodeName !== 'INPUT') return;
			  
			  
			  var destinationInput
			  var node = startInput
			  
			  //walk along the DOM, looking for the destination input 
			  
			  //look for the startInput's TD
			  do { 
				node = node.parentNode
			  } while (node && node.nodeName !== 'TD')
			  if (!node) return //ill-formed html
		  
			  if (key === keys.left || key === keys.right){				  				  		
				  //walk along the TDs until we find one that has a visible input within it				  
				  do {
					node = (key === keys.left ? node.previousElementSibling : node.nextElementSibling)
					if (node && node.nodeName === 'TD'){
						destinationInput = firstVisibleInput(node)
						} 
					else return //no more TDs available - we're done here
				  }	while (!destinationInput)				  				  
			  } 			 
			  else if (key === keys.up || key === keys.down){
				  				  				  
				  var tdIndex = node.cellIndex;
				  
				  do { //find the TR
				  	node = node.parentNode
				  } while (node && node.nodeName !== 'TR')				  
				  if (!node) return //ill-formed html
				  
				  do {
					node = (key === keys.up ? node.previousElementSibling : node.nextElementSibling)
					if (node && node.nodeName === 'TR'){
						destinationInput = firstVisibleInput(node, tdIndex)
					}
					else return //no more rows or ill-formed html
				  } while (!destinationInput)
				  				  
			  }			   
			  
			  if (destinationInput){
				  destinationInput.focus()
				  event.preventDefault() //only prevent default if navigation is happening
			  }
			  
			  
			  
			  
		  })
    }
}});
