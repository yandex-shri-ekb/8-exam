require(['jquery',
		 'app/popup',
		 'app/slide',
	     'app/app'], function($, Popup, Slide, App) {
	new Popup();
	$(document).ready(function () {
		new Slide();
		//var app = new App();
		//app.first();
	});
});