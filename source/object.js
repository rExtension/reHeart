// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: object.js (rExtension/reHeart/source/object.js)
// Content:  
// Copyright (c) 2022 Rintim Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

module.exports = () => {
    Object.new = function () {
        return new Object(...arguments);
    };

    Object.entries = function (object) {
        let result = new Array();
        for (let key in object) {
            let value = object[key];
            result.push([key, value]);
        }
        return result;
    };

    Object.prototype[Symbol.iterator] = function* () {
        for (let key in this) {
            let value = this[key];
            yield [key, value];
        }
    };
};