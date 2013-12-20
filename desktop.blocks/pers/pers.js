/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('pers', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					if (this.hasMod('position', 'bottom')) {
						this.bindTo('click', function() { 
							window.scrollTo(0,987);
						});
					}
				}
			}
		}
	});
	provide(DOM);
});
