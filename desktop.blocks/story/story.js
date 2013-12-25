/** @requires BEM */
/** @requires BEM.DOM */
 
modules.define('i-bem__dom', function(provide, DOM) {

	DOM.decl('story', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					var rand = Math.floor(Math.random() * this.colors.length),
						video,
						videoLink;

					this.bindPersonsClick(this.findBlocksInside('pers'));
					this.bindPersonsClick(this.findBlocksInside('state'));

					video = this.page().findBlockInside('video');
					videoLink = this.findBlockInside('videoLink');
					videoLink.bindTo('click', function(){ video.show(); });

					this.page().bindTo('mouseup', function(){ video.hide(); });
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
		selectCenterFixed: function(color) {
			var i, selector, otherColors;
			this.findBlockInside('person-center').setMod('pers', color);
			selector = { blockName: 'state', modName: 'color', modVal: color };
			this.findBlockInside(selector).setMod('active');
			otherColors = this.allExcept(color);
			for (i=0; i<otherColors.length; i++) {
				selector = { blockName: 'state', modName: 'color', modVal: otherColors[i] };
				this.findBlockInside(selector).delMod('active');
			}
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
			var selector,
				blocks,
				otherColors,
				i, j;

			this.setMod('color', color);
			this.colorVideoLink(color);
			this.selectCenterFixed(color);
			this.showArea(color);

			selector = { blockName: 'pers', modName: 'color', modVal: color };
			blocks = this.findBlocksInside(selector);
			for (i=0; i<blocks.length; i++)
				blocks[i].setMod('selected');

			otherColors = this.allExcept(color);
			for (i=0; i<otherColors.length; i++) {
				this.hideArea(otherColors[i]);
				selector = { blockName: 'pers', modName: 'color', modVal: otherColors[i] };
				blocks = this.findBlocksInside(selector);
				for (j=0; j<blocks.length; j++)
					blocks[j].delMod('selected');
			}
		},
		allExcept: function(color) {
			var result = [];
			for (var i=0; i<this.colors.length; i++)
				if (color != this.colors[i])
					result.push(this.colors[i]);
			return result;
		},
		colors: ['yellow','red','blue'],
	});

	provide(DOM);
});

