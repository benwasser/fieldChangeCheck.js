/*
	Made quickly by Ben Wasser (benwasser.com)

	Licensed under the Unlicense License (unlicense.org) so go crazy.

	USAGE:

		Link to this js file or include the code in your HTML. On any save event, just call fieldChangeCheck.reset();

		If you'd like to manually check for changes, call fieldChangeCheck.checkChanged() which will return true for changes or false for no changes.


		The module defaults to prompting the user before they close the tab or navigate away if they've made any changes. You can disable this by adding this line to your JS:

			fieldChangeCheck.config({ask_before_unload:false});

		The default message can also be changed by adding this line, edited to your liking:
		
			fieldChangeCheck.config({ask_before_unload_text:'Unsaved change alert!'});

*/

var fieldChangeCheck = (function () {
	var ask_before_unload = true;
	var ask_before_unload_text = 'You have unsaved changes. Are you sure you want to leave this page?';
	var my = {
		field_values: []
	};

	var documentReady = setInterval(function() {
		if (document.readyState === 'complete') {
			clearInterval(documentReady);
			my.field_values = getFieldValues();
		}
	}, 100);

	window.onbeforeunload = function() {
		if (ask_before_unload && my.checkChanged() == true) return ask_before_unload_text;
	}

	function getFieldValues(){
		var temp_field_values = [];
		var temp_inputs = document.getElementsByTagName('input')
		var temp_textareas = document.getElementsByTagName('textarea');
		for (var i = 0; i < temp_inputs.length; i += 1) {
			temp_field_values.push(temp_inputs[i].value);
		}
		for (var i = 0; i < temp_textareas.length; i += 1) {
			temp_field_values.push(temp_textareas[i].value);
		}
		return temp_field_values;
	};

	my.config = function(options){
		if (!options) options = {};
		if (options.ask_before_unload === false) ask_before_unload = false;
		if (options.ask_before_unload_text) ask_before_unload_text = options.ask_before_unload_text;
	};

	my.checkChanged = function(){
		var temp_field_values = getFieldValues();
		for (var i = 0; i < temp_field_values.length; i++) {
			if (i == my.field_values.length) return true;
			if (my.field_values[i] != temp_field_values[i]) return true;
		};
		return false;
	};

	my.reset = function(){
		my.field_values = getFieldValues();
	};

	return my;
}());
