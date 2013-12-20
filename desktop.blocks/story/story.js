/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('story', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var self = this,
						rand = Math.floor(Math.random() * this.colors.length),
						video,
						videoLink;

					this.bindPersonsClick(this.findBlocksInside('pers'));

					video = this.page().findBlockInside('video');
					videoLink = this.findBlockInside('videoLink');
					videoLink.bindTo('click', function(){ video.show(); });

					this.page().bindTo('mouseup', function(e){ video.hide(); });
					this.selectColor(this.colors[rand]);
				}
			}
		},
		page: function() {
			return this.findBlockOutside('page');
		},
		bindPersonsClick: function(array) {
			var n = array.length,
				self = this;
			while (n--) {
				array[n].bindTo('click', function(){self.personClick(this)} );
			}
		},
		colorVideoLink: function(color) {
			this.findBlockInside('videoLink').setMod('color', color);
		},
		selectPersonCenter: function(color) {
			this.findBlockInside('person-center').setMod('pers', color);
		},
		showArea: function(color) {
			var selector = { blockName: 'area', modName: 'pers', modVal: color };
			this.findBlockInside(selector).setMod('visible');
			this.page().findBlockInside('data').findBlockInside(selector).setMod('visible');
		},
		hideArea: function(color) {
			var selector = { blockName: 'area', modName: 'pers', modVal: color };
			this.findBlockInside(selector).delMod('visible');
			this.page().findBlockInside('data').findBlockInside(selector).delMod('visible');
		},
		personClick: function(person) {
			this.selectColor(person.getMod('color'));
		},
		selectColor: function(color) {
			this.setMod('color', color);
			this.colorVideoLink(color);
			this.selectPersonCenter(color);
			this.showArea(color);
			var selector = { blockName: 'pers', modName: 'color', modVal: color }
			this.findBlocksInside(selector).forEach(function(p){
				p.setMod('selected');
			});
			this.forAllExcept(color,function(noColor) {
				this.hideArea(noColor);
				var selector = { blockName: 'pers', modName: 'color', modVal: noColor }
				this.findBlocksInside(selector).forEach(function(p){
					p.delMod('selected');
				});
			},this);
		},
		forAllExcept: function(color,func,context) {
			for (var i=0; i<this.colors.length; i++) {
				if (this.colors[i] != color) {
					func.call(context, this.colors[i]);
				}
			}
		},
		colors: ['yellow','red','blue'],
	});

	provide(DOM);
});

