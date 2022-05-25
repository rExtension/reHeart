// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: number.js (rExtension/reHeart/source/number.js)
// Content:  
// Copyright (c) 2022 Rintim Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

module.exports = () => {
	// Ruby's style to create a number
	// ## Examples
	// 	> Number.new() # => 0
	Number.new = function () {
		return new Number(...arguments);
	};

	// Determines if the number is a integer
	// ## Examples
	//  > 1.0.is_integer() # => false
	//  > 1.is_integer() # => true
	Number.prototype.is_integer = function () {
		return Number.isInteger(this.valueOf());
	};

	// Alias as Number.prototype.is_integer
	// ## Examples
	//  > 1.0.isInteger() # => false
	//  > 1.isInteger() # => true
	Number.prototype.isInteger = Number.prototype.is_integer;

	// Determines if the integer is a even
	// If the number is not a integer, return -1
	// ## Examples
	//  > 1.is_even() # => false
	//  > 2.is_even() # => true
	// 	> 1.0.is_even() # => -1
	Number.prototype.is_even = function (fun) {
		if (!this.is_integer()) return -1;
		return !(this & 1);
	};

	// Alias as Number.prototype.is_even
	// ## Examples
	//  > 1.isEven() # => false
	//  > 2.isEven() # => true
	// 	> 1.0.isEven() # => -1
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