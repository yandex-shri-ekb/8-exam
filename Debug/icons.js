
var iconsManager = (function() 
{
	var currentStory = -1;
	return {
		showIcons : function(storyNumber)
		{
			if(this.currentStory === storyNumber)
				return;
			this.currentStory = storyNumber;
			this.showBigPersonIcon();
			this.updateStoryIcons();
		},
		
		hideIcons : function()
		{
			this.currentStory = -1;
			this.hideBigPersonIcon();
			this.hideStoryIcons();
		},
		
		showBigPersonIcon : function()
		{		
			$(".bigPersonIcon").css({"display" : "block"});		
		},
		
		hideBigPersonIcon : function()
		{		
			$(".bigPersonIcon").css({"display" : "none"});		
		},

		hideStoryIcons : function()
		{
			$(".storyIconContainer").css({ "display" : "none" });
		},	

		updateStoryIcons : function()
		{
			 $(".yellowStoryIcon").css({ "background" : new YellowStory().getStoryIcons()[this.currentStory]});
			 $(".redStoryIcon").css({ "background" : new RedStory().getStoryIcons()[this.currentStory]});
			 $(".blueStoryIcon").css({ "background" : new BlueStory().getStoryIcons()[this.currentStory]});	
			 
			 $(".storyIconContainer").css({ "display" : "block" });
		 }	
	};
})();