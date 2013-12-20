
/*
   Генерация числа в диапазоне [min, max];
*/
function random(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
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

function inRange(min, value, max)
{
	return min <= value && value <= max;
}

function hookScroll()
{
	$(window).scroll(function() 
	{       
		var value = $(this).scrollTop();
		if(inRange(1500, value, 2200))
		{
			iconsManager.showIcons(1);
		}
		else if(inRange(2200, value, 2900))
		{
			iconsManager.showIcons(2);
		}
		else if(inRange(2900, value, 3800))
		{
			iconsManager.showIcons(3);
		}
		else
		{
			iconsManager.hideIcons();
		}
	});	
}

function init()
{
	setRandomStory();
	hookScroll();
}
