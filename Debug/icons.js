
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
			
			 var icons = [];
			 icons[1] = {
				 "red" : "url('Images/stories.png') 20px 10px no-repeat",
				 "yellow" : "url('Images/stories.png') -180px 10px no-repeat",
				 "blue" : "url('Images/stories.png') -450px 10px no-repeat"
			 };
			 icons[2] = {
				 "red" : "url('Images/stories.png') 20px -130px no-repeat",
				 "yellow" : "url('Images/stories.png') -180px -130px no-repeat",
				 "blue" : "url('Images/stories.png') -450px -130px no-repeat"
			 };
			 icons[3] = {
				 "red" : "url('Images/stories.png') 20px -270px no-repeat",
				 "yellow" : "url('Images/stories.png') -180px -270px no-repeat",
				 "blue" : "url('Images/stories.png') -450px -270px no-repeat"
			 };	
	
			 $(".yellowStoryIcon").css({ "background" : icons[this.currentStory]["yellow"] });
			 $(".redStoryIcon").css({ "background" : icons[this.currentStory]["red"] });
			 $(".blueStoryIcon").css({ "background" : icons[this.currentStory]["blue"] });	
			 $(".storyIconContainer").css({ "display" : "block" });
		 }	
	};
})();