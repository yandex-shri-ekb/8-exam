modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('center-fixed', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var self = this;
					window.onscroll = function () {
						if ( window.pageYOffset > 1430 && window.pageYOffset < (4742 - document.documentElement.clientHeight))
							self.setMod('visible');							
						else
							self.delMod('visible');
					}
				}
			}
		}
	});	
	provide(DOM);
});
