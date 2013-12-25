/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('button', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var self = this;
					this.dataPage = this.findBlockOutside('page').findBlockInside('data');
					this.bindTo('click', function(){ self.onClick(); });
				}
			}
		},
		onClick: function() {
			this.isOpened = !this.isOpened;
			if (this.isOpened) {
				this.setMod('opened');
				this.dataPage.setMod('opened');
				this.findBlockOutside('page').findBlockInside('center-fixed').delMod('visible');
			}
			else {
				this.delMod('opened');
				this.dataPage.delMod('opened');
				this.findBlockOutside('page').findBlockInside('center-fixed').setMod('visible');
			}
		},
		isOpened: false
	});

	provide(DOM);
});

