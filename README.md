fieldChangeCheck.js
===================

Small Javascript module for automatically checking if any page input or textarea values have been changed and alert users before they navigate away with unsaved changes

### Usage:

Link to this js file or include the code in your HTML. On any save event, just call

````js
	fieldChangeCheck.reset();
````

If you'd like to manually check for changes, call 

````js
	fieldChangeCheck.checkChanged()
````

which will return true for changes or false for no changes.

### Settings:

The module defaults to prompting the user before they close the tab or navigate away if they've made any changes. You can disable this by adding this line to your JS:

````js
	fieldChangeCheck.config({ask_before_unload:false});
````

The default message can also be changed by adding this line, edited to your liking:

````js
	fieldChangeCheck.config({ask_before_unload_text:'Unsaved change alert!'});
````
