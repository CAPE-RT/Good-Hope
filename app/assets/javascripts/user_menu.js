// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var ready = function() {

new jBox('Tooltip', {
		attach: $('.user-menu'),
		content: $('#user-menu'),
		trigger: 'click',
		closeOnClick: 'body',
		fade: 200,
		zIndex:8000,
		closeOnMouseleave:false,
		position: { y: 'bottom', x: 'right' },
		pointer: 'right'
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);