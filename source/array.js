// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: array.js (rExtension/reHeart/source/array.js)
// Content:  
// Copyright (c) 2022 Rintim Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

module.exports = () => {
    Array.new = function () {
        return new Array(...arguments);
    };

    Array.seq = function (start, end, step) {
        // if (!typeof start === "number" || !start.isInteger()) return;
        if (!end) return Array.seq(0, start);
        // if (!typeof end === "number" || !end.isInteger()) return;
        if (!step) return Array.seq(start, end, /* start >= end ? */ 1 /* : -1 */);
        // if (!typeof step === "number" || !step.isInteger()) return;
        let result = Array.new();
        for (var i = start; i <= end; i += step) result.push(i);
        return result;
    };

    Array.zip = function (...arr) {
        return Array(Math.max(...arr.map(a => a.length))).fill().map((_, i) => arr.map(a => a[i]));
    };

    Array.prototype.first = function () {
        return this[0];
    };

    Array.prototype.head = Array.prototype.first;

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.tail = function () {
        return this.slice(1);
    };

    Array.prototype.is_empty = function () {
        return !this.length;
    };

    Array.prototype.isEmpty = Array.prototype.is_empty;

    Array.prototype.dup = function () {
        return /* this.map(item => item) */ this.slice(0);
    };

    Array.prototype.decrease = function (acc, fun) {
        if (!fun) return this.tail().decrease(this[0], acc);
        if (this.is_empty()) return acc;
        return this.tail().decrease(fun(this[0], acc), fun);
    };

    Array.prototype.count = function (fun) {
        return this.filter(fun).length;
    };

    Array.prototype.zip = function (...arr) {
        return Array.zip(this, ...arr);
    };

    Array.prototype.delete = function (...items) {
        let result = Array.new();
        for (let i = 0; i < this.length; ++i) {
            if (items.includes(this[i])) {
                result.push(this[i]);
                this.splice(i, 1);
                --i;
            }
        }
        return result;
    };
};