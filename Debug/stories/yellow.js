

function YellowStory()
{
	Story.call(this);
}

YellowStory.prototype = new Story();
YellowStory.prototype.constructor = YellowStory;

YellowStory.prototype.getBackgroundColor = function()
{
	return "rgb(254, 224, 92)";
}

YellowStory.prototype.getStoryImage = function()
{
	return "url('Images/Yellow/story.png') no-repeat";
}

YellowStory.prototype.getBigPersonImage = function()
{
	return "url('Images/bigPersons.png') 0 10px no-repeat";
}

YellowStory.prototype.getStoryTexts = function()
{
	var texts = [
		"Максим хочет увидеть настоящий, нетуристический Таиланд. <br /> <br />" +
		"Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.",
		
		"Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь. <br /> <br />" + 
		"Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.",
		
		"Рюкзак с вещами и ноутбуком — вот и весь багаж Максима. <br /> <br />" + 
		"На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе",
		
		"Максим не сидит на месте — в поисках интересных мест он колесит по всей стране. <br /> <br />" + 
		"Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу."
	];
	return texts;		
}

YellowStory.prototype.getSideBarContent = function()
{	
	return [
			new SideBarStory("Покупка авиабилетов",
							 "Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами."),
							 
			new SideBarStory("Рекомендации по покупке подходящих товаров",
							"Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома»."),
							
			new SideBarStory("Предложение купить билет на аэроэкспресс",
							"Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления."),							

			new SideBarStory("Выбор интересных мест для посещения",
					"Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.")
	];		
}

YellowStory.prototype.getSideBarImages = function()
{
	return [
			"Images/Yellow/right1.jpg",
			"Images/Yellow/right2.jpg",
			"Images/Yellow/right3.jpg",
			"Images/Yellow/right4.jpg"
	];
}

YellowStory.prototype.getStoryIcons = function()
{
	return [
		"url('Images/stories.png') -180px 10px no-repeat",
		"url('Images/stories.png') -180px -130px no-repeat",
		"url('Images/stories.png') -180px -270px no-repeat"			
	];
}


