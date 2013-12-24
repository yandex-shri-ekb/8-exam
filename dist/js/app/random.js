define([], function() {
	function randomizer(min, max) {
	    return (Math.floor(Math.random() * (Number(max) - Number(min) + 1))) + Number(min);
	}

	return randomizer(1, 3); 
});