define(['jquery'], function($) {
	
	var $helpBtn = $('.help'),
	    $right   = $('.right'),
	    $content = $('.content');

    Slide = function() {
    	eventRight();

    	$helpBtn.click($.proxy(this.viewRight, this));
    	$right.click($.proxy(this.viewRight, this));
    	$content.click($.proxy(this.viewContent, this));
    }

    Slide.prototype.viewRight = function(event) {
    	var widthView   = widthViewPort();
    		leftToRight = widthView - 770;
		
		if (widthView <= 1730) {
	    	if ($helpBtn.hasClass('help__close')) {
	    		defaultVies();
	    	} else {
	    		$right.css({cursor: 'default', left: leftToRight + 'px'});
	    		$helpBtn.addClass('help__close');
	    		$content.addClass('cursor_pointer');
	    	}
    	}
	}

    Slide.prototype.viewContent = function(event) {
    	if ($content.hasClass('cursor_pointer')) {
    		defaultVies();
    	}
	}

	function defaultVies() {
		$right.css({cursor: 'pointer', left: '972px'});
    	$helpBtn.removeClass('help__close');
    	$content.removeClass('cursor_pointer');
	}

	function widthViewPort() {
		return $(window).width();
	}

    function eventRight() {
    	var widthView = widthViewPort();

    	if (widthView > 1730) {
    		$helpBtn.fadeTo(200, 0, function() {
    			$(this).hide();
				$right.css('cursor', 'default');
    		});
    	} else {
    		$helpBtn.fadeTo(200, 1, function() {
    			$(this).show();
				defaultVies();
    		});
    	}
    }

    $(function() {
        $(window).resize(eventRight);  
    });

	return Slide;
});