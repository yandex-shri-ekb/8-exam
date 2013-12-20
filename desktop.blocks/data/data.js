/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('data', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var self = this;
					window.onresize = function() { self.updateLeft(); };
				}
			},
			'opened': {
				'*': function() {
					this.updateLeft();
				}
			}
		},
		updateLeft: function() {
			if (this.hasMod('opened')) {
				var left = document.documentElement.clientWidth - 870;
				if (left < 0)
					left = 60;
				if (left < 970)
					this.domElem.css({left: left});
			}
			else {
				this.domElem.css({left: 970});
			}
		}
	});

	provide(DOM);
});

