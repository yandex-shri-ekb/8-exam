/**
 * Выбирает случайный элемент из массива и возвращает его
 *
 * @param {a} a массив
 */
var select = function (a) {
    try {
        return a[Math.floor(a.length * Math.random())];
    } catch (e) {
        console.warn(a);
    }
};


/**
 * контроль цвета
 *
 * @param {$this} $this блок либо элемент
 */
var ColorControl = function ($this) {
    $this.setMod('color', color);
};

/**
 * переинициализация
 *
 */
var Reset = function () {
    $(".history").trigger('init');
    $(".person-history").trigger('init');
    $(".select-grig").trigger('init');
    $(".select-max").trigger('init');
    $(".select-alex").trigger('init');
    $(".video-button__button").trigger('init');
    $(".this-user__person").trigger('init');
    $(".smal-person-button__grig").trigger('init');
    $(".smal-person-button__max").trigger('init');
    $(".smal-person-button__alex").trigger('init');
    $(".max-used-services").trigger('init');
    $(".alex-used-services").trigger('init');
    $(".grig-used-services").trigger('init');
};


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);
    if (4169 > scrolled && scrolled > 1357) {
        $(".this-user").fadeIn("slow");
    }
    else {
        $(".this-user").fadeOut("slow");
    }
    if (scrolled > 1357) {
        $('.smal-person-button__max').setMod('step', 1);
        $('.smal-person-button__alex').setMod('step', 1);
        $('.smal-person-button__grig').setMod('step', 1);
    }
    if (scrolled > 2193) {
        $('.smal-person-button__max').setMod('step', 2);
        $('.smal-person-button__alex').setMod('step', 2);
        $('.smal-person-button__grig').setMod('step', 2);
    }
    if (scrolled > 3018) {
        $('.smal-person-button__max').setMod('step', 3);
        $('.smal-person-button__alex').setMod('step', 3);
        $('.smal-person-button__grig').setMod('step', 3);
    }
    if (scrolled > 3782) {
        $('.smal-person-button__max').setMod('step', 4);
        $('.smal-person-button__alex').setMod('step', 4);
        $('.smal-person-button__grig').setMod('step', 4);
    }
};


var themes = [0, 1, 2], colors = ['yellow', "red", "blue"], persons = ["max", "alex", "grig"],
    theme = select(themes),
    color = colors[theme],
    person = persons[theme];

bem.setConfig({
    namePrefix: '',     // Префикс блока, можно регуляркой
    elemPrefix: '__',    // Префикс элемента
    modPrefix: '_',     // Префикс модификатора
    modDlmtr: '_'       // Разделитель модификатора и значения
});

bem.decl('hack', {

    onClick: function ($this, e) {
        $this.hide();
        console.log("sdfsdf");
    }


});

bem.decl('services-toggle', {

    onClick: function ($this) {
        if ($this.hasMod('state')) {
            $this.delMod('state', 'active');
            $(".used-services").delMod('state', 'active')
        } else {
            $this.setMod('state', 'active');
            $(".used-services").setMod('state', 'active')
        }
    }
});

bem.decl('used-services', {

    onClick: function ($this) {
        if ($this.hasMod('state')) {
            $this.delMod('state', 'active');
            $(".services-toggle").delMod('state', 'active')
        } else {
            $this.setMod('state', 'active');
            $(".services-toggle").setMod('state', 'active')
        }
    },
    onSetmod: function ($this, e, modKey, modVal) {
        if (modKey == 'state' && modVal == 'active') {
            var size = $(window).width() - 874;
            if (size < 972) {
                $this.animate({'margin-left': size}, "slow");
            }
        }
    },
    onDelmod: function ($this, e, modKey, modVal) {
        if (modKey == 'state' && modVal == 'active') {
            $this.animate({'margin-left': 972}, "slow");
        }
    }
});


bem.decl('history', {

    onInit: function ($this) {
        ColorControl($this);
    }
});

bem.decl('video-button__button', {

    onInit: function ($this) {
        ColorControl($this);
    }
});

bem.decl('person-history', {

    onInit: function ($this) {
        ColorControl($this);
    }
});

bem.decl('this-user__person', {
    onInit: function ($this) {
        ColorControl($this);
    }
});


bem.decl('select-max', {
    onInit: function ($this) {

        if (color == "yellow") {
            $this.setMod('state', 'active');
            $(".max-description").show();
        } else {
            $this.delMod('state');
            $(".max-description").hide();
        }
    },

    onMouseover: function () {
        $(".js-description").hide();
        $(".max-description").show();
    },
    onMouseout: function () {
        $(".max-description").hide();
        Reset();
    },
    onClick: function () {
        color = colors[0];
        Reset();
    }
});

bem.decl('select-alex', {
    onInit: function ($this) {
        if (color == "red") {
            $this.setMod('state', 'active');
            $(".alex-description").show();
        } else {
            $this.delMod('state');
            $(".alex-description").hide();
        }
    },
    onMouseover: function () {
        $(".js-description").hide();
        $(".alex-description").show();
    },
    onMouseout: function () {
        $(".alex-description").hide();
        Reset();
    },
    onClick: function () {
        color = colors[1];
        Reset();
    }
});
bem.decl('select-grig', {
    onInit: function ($this) {
        if (color == "blue") {
            $this.setMod('state', 'active');
            $(".grig-description").show();
        } else {
            $this.delMod('state');
            $(".grig-description").hide();
        }
    },
    onMouseover: function () {
        $(".js-description").hide();
        $(".grig-description").show();
    },
    onMouseout: function () {
        $(".grig-description").hide();
        Reset();
    },
    onClick: function () {
        color = colors[2];
        Reset();
    }
});


bem.decl('smal-person-button__max', {
    onInit: function ($this) {
        if (color == "yellow") {
            $this.setMod('state', 'active');
        } else {
            $this.delMod('state');
        }
    },
    onClick: function () {
        color = colors[0];
        Reset();
    }

});
bem.decl('smal-person-button__alex', {
    onInit: function ($this) {
        if (color == "red") {
            $this.setMod('state', 'active');
        } else {
            $this.delMod('state');
        }
    },
    onClick: function () {
        color = colors[1];
        Reset();
    }

});
bem.decl('smal-person-button__grig', {
    onInit: function ($this) {
        if (color == "blue") {
            $this.setMod('state', 'active');
        } else {
            $this.delMod('state');
        }
    },
    onClick: function () {
        color = colors[2];
        Reset();
    }

});


bem.decl('max-used-services', {
    onInit: function ($this) {
        if (color == "yellow") {
            $this.show()
        } else {
            $this.hide()
        }
    },
    onClick: function () {
        color = colors[0];
        Reset();
    }

});

bem.decl('alex-used-services', {
    onInit: function ($this) {
        if (color == "red") {
            $this.show()
        } else {
            $this.hide()
        }
    },
    onClick: function () {
        color = colors[1];
        Reset();
    }

});

bem.decl('grig-used-services', {
    onInit: function ($this) {
        if (color == "blue") {
            $this.show()
        } else {
            $this.hide()
        }
    },
    onClick: function () {
        color = colors[2];
        Reset();
    }

});




