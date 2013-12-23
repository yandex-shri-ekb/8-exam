define(['jquery'], function($) {
    'use strict';

    var $backdrope = null,
        _isInited = false,
        _opened = [];

    /**
     * @export app/modal
     * @class Modal
     */
    function Modal($modal) {
        this.$modal = $modal;

        if(!_isInited) {
            _isInited = true;
            $backdrope = $('<div class="modal__backdrop"></div>').appendTo($('body'));
        }

        $modal.click(function() {
            $.each(_opened, function(i, item) {
                item.hide();
            });
        });

        $('.modal__dialog', $modal).click(function() {
            return false;
        });
    }
    /**
     */
    Modal.prototype.show = function() {
        this.$modal.show();
        $backdrope.show();
        _opened.push(this);
    };

    /**
     */
    Modal.prototype.hide = function() {
        this.$modal.hide();

        var i = _opened.indexOf(this);
        if(i !== -1) {
            _opened.splice(i, 1);
        }

        if(_opened.length === 0) {
            $backdrope.hide();
        }
    };

    return Modal;
});