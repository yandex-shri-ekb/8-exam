'use strict';

define([], function() {
    var utils = {};

    /**
     * @param {int} min
     * @param {int} max
     * @return int
     */
    utils.getInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return utils;
});

