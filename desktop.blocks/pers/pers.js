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
					if (this.hasMod('position', 'top')){
						this.bindTo('mouseover', function() {
							this.showDescription(this.getMod('color'));
						});
						this.bindTo('mouseout', function() {
							this.hideDescription(this.getMod('color'));
						});
					}
				}
			}
		},
		showDescription: function(color) {
			var selector = { blockName: 'description', modName: 'color', modVal: color };
			this.findBlockOutside('page').findBlockInside(selector).setMod('visible');
		},
		hideDescription: function(color) {
			var selector = { blockName: 'description', modName: 'color', modVal: color };
			this.findBlockOutside('page').findBlockInside(selector).delMod('visible');
		}
	});
	provide(DOM);
});
