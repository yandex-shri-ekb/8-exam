
/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('video', {
		onSetMod: {
			'js' : {
				'inited' : function() {
				}
			}
		},
		show: function() {
			this.sendCommand('seekTo', 0);
			this.sendCommand('play');
			this.setMod('visible');
		},
		hide: function() {
			this.delMod('visible');
			this.sendCommand('pause');
		},
		sendCommand: function(name,value) {
			var iframe = this.elem('iframe')[0];
			iframe.contentWindow.postMessage({ method: name, value: value }, iframe.src);
		}
	});

	provide(DOM);
});
