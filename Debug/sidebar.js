

var sideBar = (function() {
	//сохраняем смещение, чтобы потом сворачивать панель туда же
	var offset;
	return {
	
		visible : function()
		{
			return $(".header").width() + $(".sideBar").width() <= $(window).width();
		},

		getVisibleOffset : function()
		{
			return $(".header").width() - ($(".header").width() + $(".sideBar").width() - $(window).width());
		},
		
		expand	: function()
		{
			offset = $(".sideBar").offset().left;		
			$(".sideBarReduceButton").css({"display" : "block"});
			if(!this.visible())
			{
				$(".sideBar").animate({				
					left: Math.max(60, this.getVisibleOffset()) + "px" // панель не должна уходить в минус, если размер окна слишком маленький. Оставляем немного места (60px)
				}, 400);	
			}
		},
		reduce	: function()
		{
			$(".sideBarReduceButton").css({"display" : "none"});
			$(".sideBar").animate({
				left: offset + "px"
			}, 400);
		}
	};
})();