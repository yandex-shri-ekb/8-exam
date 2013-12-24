require(['jquery',
		 'app/popup',
		 'app/slide',
	     'app/app'], function($, Popup, Slide, App) {
	new Popup();
	new Slide();
	new App().init();
});