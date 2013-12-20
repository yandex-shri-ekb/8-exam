function BlueStory()
{
	Story.call(this);
}

BlueStory.prototype = new Story();
BlueStory.prototype.constructor = BlueStory;

BlueStory.prototype.getBackgroundColor = function()
{
	return "rgb(114, 196, 246)";
}

BlueStory.prototype.getStoryImage = function()
{
	return "url('Images/Blue/story.png') no-repeat";
}


BlueStory.prototype.getBigPersonImage = function()
{
	return "url('Images/bigPersons.png') 0 -460px no-repeat";
}

BlueStory.prototype.getStoryTexts = function()
{
	var texts = [
		"Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи. <br /> <br />" + 
		"Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.",
		
		"Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича. <br /> <br />" + 
		"В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных.",
		
		"Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск. <br /> <br />"  + 
		"Добираться до аэропорта он будет на такси.",
		
		"В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе. <br /> <br />" + 
		"Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги."	
		
	];
	return texts;
	
}


BlueStory.prototype.getSideBarContent = function()
{	
	return [
			new SideBarStory("Рекомендации по подбору отеля", 
						"Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу."),
						
			new SideBarStory("Рекомендации по покупке подходящих товаров", 
							"Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут."),
							
			new SideBarStory("Напоминание о заказе такси",
							"Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса."),
							
			new SideBarStory("Рекомендации по оздоровительным процедурам", 
							"На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.")
	];		
}

BlueStory.prototype.getSideBarImages = function()
{
	return [
			"Images/Blue/right1.jpg",
			"Images/Blue/right2.jpg",
			"Images/Blue/right3.jpg",
			"Images/Blue/right4.jpg"
	];
}

BlueStory.prototype.getStoryIcons = function()
{
	return [
		"url('Images/stories.png') -450px 10px no-repeat",
		"url('Images/stories.png') -450px -130px no-repeat",
		"url('Images/stories.png') -450px -270px no-repeat"			
	];
}

