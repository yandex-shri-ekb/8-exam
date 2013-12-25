/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('person-center', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var self = this;
					window.onscroll = function () { // при скролле показывать и прятать блок
						if ( window.pageYOffset > 1430 && window.pageYOffset < 3760)
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

