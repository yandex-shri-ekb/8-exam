
/*
   Создает новый экземпляр Story.
   Данный обьект инкапсулирует всю логику, которая нужна
   для установки истории персонажа (смена бэкграунда, смена основного текста и т.д.)
*/
function Story()
{
	this.storiesCount = 4;
}

/*
 * Заменяет бэкгранд везде где необходимо
 * @param {string} Цвет данной истории. (Пример: "rgba(...)")
 * @param {string} URL картинки, которая будет установлена на задний фон
 * @param {string} URL иконки персонажа, которая будет установлена на передний план при скролле
 */
Story.prototype.setBackground = function(color, storyImage, personImage)
{
	$(".header").css({ "background" : color + " url('Images/header.png') no-repeat" });
	$(".persons").css({ "background" : color });
	$(".video").css({ "background" : color });
	
	$(".story").css({ "background" : color + " " + storyImage});		
	
	$(".bigPersonIcon").css({ "background" : personImage });
}

/*
 * Заменяет основной текст истории.
 * @param {string[]} Массив историй.
 */
Story.prototype.setStoryContent = function(stories)
{
	for(var storyNumber = 0; storyNumber < this.storiesCount; ++storyNumber)
	{
		$(".story" + (storyNumber + 1) + " .mainText").html(stories[storyNumber]);
	}
	
}

/*
 * Заменяет основной текст правой панели.
 * @param {string[]} Массив историй.
 */
Story.prototype.setSideBarContent = function(stories)
{
	for(var storyNumber = 0; storyNumber < this.storiesCount; ++storyNumber)
	{
		$(".sideBarStory" + (storyNumber + 1) + " .sideBarTitle").html(stories[storyNumber]["title"]);
		$(".sideBarStory" + (storyNumber + 1) + " .sideBarText").html(stories[storyNumber]["content"]);		
	}
	
}

/*
 * Заменяет картинки в правой панели для данного персонажа.
 * @param {string[]} Массив историй.
 */
Story.prototype.setSideBarImages = function(images)
{
	for(var storyNumber = 0; storyNumber < this.storiesCount; ++storyNumber)
	{
		$(".sideBarStory" + (storyNumber + 1) + "Image").attr("src", images[storyNumber]);
	}	
}

/*
 * Делает активной некоторую историю, устанавливая все необходимые св-ва.
 */
Story.prototype.activate = function()
{
	this.setBackground(
		this.getBackgroundColor(), 
		this.getStoryImage(), 
		this.getBigPersonImage());
	
	this.setStoryContent(this.getStoryTexts());
	this.setSideBarContent(this.getSideBarContent());
	this.setSideBarImages(this.getSideBarImages());
}



function SideBarStory(title, content)
{
	this.title = title;
	this.content = content;
}

