# AngularJS Components

A hodge-podge of reusable directives and other stuff for AngularJS apps. 
I add to this whenever I have a need for something that's sufficiently generic that I might want it somewhere else. 

Download the entire app and run it to test the components and see a demo. Each component is in its own 
directory, and contains a sample.

## agNavigableTable

Allows the user to use their keyboard to navigate inputs in a table. It's useful when you have an HTML table
filled with input boxes, functioning as a grid for user input. 
(Side note: grids are often a sign of bad design. Just because something's stored in the database in tabular fashion
doesn't mean the users think of the data in a tabular way. Grids should be used only when that's the way the data is 
organized in a users mind - the stuff that goes in spreadsheets, like financial data.)

The app contains a demo of the various ways this works. You can also check out this plunkr: 
http://plnkr.co/edit/R2md6Pt7rpzEkSG4cXHY?p=preview

###Usage

-Include the directive source in your app, and add 'ag.directives' as a module to your application: 

```
	var app = angular.module('app', [  
	  'ngRoute',
	  //etc.
	  'ag.directives'
	])
```

-Add the directive as an attribute to the tbody or table element in your table. 
-Use the arrow keys and the `Enter` key to navigate around the inputs in the table. See the Options section for more details.

###Notes 
If you have multiple `tbody`s in your table, a single `ag-navigable-table` on the `table` element
will apply to all of them. But keyboard navigation will not cross a `tbody` boundary. In addition, 
inputs in the `thead` will not be accessible via the directive.

###Options

You can optionally pass an argument to the directive to specify the navigation mode to use: `ag-navigable-table="excel"`.
This changes the navigation mode from "Standard" to "Excel".

In Excel mode, the directive strives to mimic the behavior of 
MS Excel, while Standard mode follows what I consider a more natural and intuitive approach. (I prefer Standard, except
where the user base consists of heavy Excel users, in which case it makes sense to provide them an interface that 
behaves the way they expect it to.) The difference is how the `Enter` key behaves and how the user can move the cursor within
the currently active cell:

In Excel mode, the `Enter` key behaves like the down arrow, moving the focus to the next input cell below the current cell.
The right and left arrow keys move the focus to the next input cell on the right and left, except when the user double clicks 
on the current cell, after which the the right and left arrow keys move the cursor within the current cell. The user can revert
the right/left arrow keys' behavior by moving to a new cell. 

In Standard mode, the only way to move down is using the down arrow. The `Enter` key's function is to allow the user to use
the right/left arrow keys to move the cursor within the current cell. (The `Enter` key functions as a toggle - hitting `Enter` again
returns the right/left arrow keys to their original function of moving about the grid.) The user can also revert the right/left
arrow keys' behavior by moving to a new cell.

###Future
-I would like to add support for more than just inputs - contenteditable divs, textareas, etc. 
