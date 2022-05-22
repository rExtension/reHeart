// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: number.js (rExtension/reHeart/source/number.js)
// Content:  
// Copyright (c) 2022 Rintim Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

module.exports = () => {
    Number.new = function () {
        return new Number(...arguments);
    };

    Number.prototype.is_integer = function () {
        return Number.isInteger(this.valueOf());
    };

    Number.prototype.isInteger = Number.prototype.is_integer;

    Number.prototype.is_even = function (fun) {
        if (!this.is_integer()) return -1;
        return !(this & 1);
    };

    Number.prototype.isEven = Number.prototype.is_even;

    Number.prototype.times = function (fun) {
        if (this < 0) return;
        if (!this.is_integer()) return;
        for (let i = 0; i < this; ++i) {
            fun(i);
        }
        return 0;
    };
};