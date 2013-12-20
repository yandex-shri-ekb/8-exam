
/*
   Генерация числа в диапазоне [min, max];
*/
function random(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
   Проверяет то, что value находится в диапазоне от min до max.
   min <= value <= max;
*/
function inRange(min, value, max)
{
	return min <= value && value <= max;
}

function playVideo()
{
	$('#videoPlayer').click(function(event){
	    event.stopPropagation(); // клик на плеере не должен подниматься на родительский
	});
	$(".videoPlayerContainer").css({"display" : "block"});
}

function hideVideo()
{
	$(".videoPlayerContainer").css({"display" : "none"});
	document.getElementById("videoPlayer").pause();
}


function setRandomStory()
{
	var stories  = [
		new RedStory(),
		new YellowStory(),
		new BlueStory()
	];
	stories[random(0,2)].activate();
}

function UpdateBigPersonImage(scrollTopValue)
{
	if(inRange(1500, scrollTopValue, 3800))
	{
		$(".bigPersonIcon").css({"display" : "block"});		
	}
	else
	{
		$(".bigPersonIcon").css({"display" : "none"});				
	}
}

function  ShowStoryIcons(storyNumber)
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
	
	
	
	$(".yellowStoryIcon").css({ "background" : icons[storyNumber]["yellow"] });
	$(".redStoryIcon").css({ "background" : icons[storyNumber]["red"] });
	$(".blueStoryIcon").css({ "background" : icons[storyNumber]["blue"] });	
	$(".storyIconContainer").css({ "display" : "block" });
}

function HideSmallIcons()
{
	$(".storyIconContainer").css({ "display" : "none" });
}

function UpdateSmallIcons(scrollTopValue)
{
	if(inRange(1500, scrollTopValue, 2200))
	{
		ShowStoryIcons(1);
	}
	else if(inRange(2200, scrollTopValue, 2900))
	{
		ShowStoryIcons(2);
	}
	else if(inRange(2900, scrollTopValue, 3800))
	{
		ShowStoryIcons(3);
	}
	else
	{
		HideSmallIcons();
	}
}

function hookScroll()
{
   $(window).scroll(function() 
   {       
        var scrollTopValue = $(this).scrollTop();
        UpdateBigPersonImage(scrollTopValue);
        UpdateSmallIcons(scrollTopValue);
   });
}


function init()
{
	setRandomStory();
	hookScroll();

}
