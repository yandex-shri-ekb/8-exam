/**
 * Промостраница. Случайны выбор активного персонажа
 * 
 * @author Artem Kuzvesov <arktuz@gmail.com>
 * @version 0.01
 * @copyright Artem Kuzvesov 2013
 * 
 */
define([], function() {
	/**
	 * randomizer генератор случайных целых чисел
	 * @param  {number} min минимальное значение]
	 * @param  {number} max максимальное значени
	 * @return {number}     случайное число между min и max
	 */
	function randomizer(min, max) {
	    return (Math.floor(Math.random() * (Number(max) - Number(min) + 1))) + Number(min);
	}

	return randomizer(1, 3); 
});