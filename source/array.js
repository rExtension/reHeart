// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: array.js (rExtension/reHeart/source/array.js)
// Content:  
// Copyright (c) 2022 Rintim Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

module.exports = () => ({
	// Ruby's style to create Array
	// ## Examples
	// 	> Array.new([1, 2, 3]) # => [1, 2, 3]
	new: function () {
		return new Array(...arguments);
	},

	seq: function (start, end, step) {
		// if (!typeof start === "number" || !start.isInteger()) return;
		if (!end) return Array.seq(0, start);
		// if (!typeof end === "number" || !end.isInteger()) return;
		if (!step) return Array.seq(start, end, /* start >= end ? */ 1 /* : -1 */);
		// if (!typeof step === "number" || !step.isInteger()) return;
		let result = Array.new();
		for (var i = start; i <= end; i += step) result.push(i);
		return result;
	},

	// Combine arrays to one
	// ## Examples
	// 	> Array.zip([1, 2, 3], [4, 5, 6], [7, 8]) # => [[1, 4, 7], [2, 5, 8], [3, 6, undefined]]
	zip: function (...arr) {
		return Array(Math.max(...arr.map(a => a.length))).fill().map((_, i) => arr.map(a => a[i]));
	},

	prototype: {
		// Return the first element
		// ## Examples
		// 	> [1, 2, 3].first() # => 1
		first: function () {
			return this[0];
		},

		// Alias as Array.prototype.first
		// name comes from elixir
		// ## Examples
		// 	> [1, 2, 3].head() # => 1
		head: function () {
			return this[0];
		},

		// Return the last element
		// ## Examples
		// 	> [1, 2, 3].last() # => 3
		last: function () {
			return this[this.length - 1];
		},

		// Return an array without the first element
		// ## Examples
		// 	> [1, 2, 3].tail() # => [2, 3]
		tail: function () {
			return this.slice(1);
		},

		// Determines if the array is empty
		// ## Examples
		//  > [1, 2, 3].is_empty() # => false
		//  > [].is_empty() # => true
		is_empty: function () {
			return !this.length;
		},

		// Alias as Array.prototype.is_empty
		// ## Examples
		//  > [1, 2, 3].isEmpty() # => false
		//  > [].isEmpty() # => true
		isEmpty: function () {
			return !this.length;
		},

		// Return the array's copy which won't affect the origin
		// ## Examples
		//  > [1, 2, 3].dup() # => [1, 2, 3]
		dup: function () {
			return this.slice(0);
		},

		// Another Reduce with Elixir's style
		// ## Examples
		//  > [1, 2, 3].decrease(4, (item, result) => result + item) # => 10
		decrease: function (acc, fun) {
			if (!fun) return this.tail().decrease(this.head(), acc);
			if (this.is_empty()) return acc;
			return this.tail().decrease(fun(this.head(), acc), fun);
		},

		// Returns the count of elements in the array for which fun returns a truthy value.
		// If there's no function, it will become to return the size of the array
		// ## Examples
		//  > [1, 2, 3].count() # => 3
		// 	> [1, 2, 3].count(item => item > 2) # => 1
		count: function (fun) {
			if (!fun) return this.length;
			return this.filter(fun).length;
		},

		// Another Find as Noname modify the find method
		// ## Examples
		//  > [1, 2, 3].find(item > 2) # => 3
		fetch: function (fun) {
			for (let item of this) {
				if (fun(item)) return item;
			}
			return null;
		},

		// Same as Array.zip but use the array as the first argument
		// ## Examples
		//  > [1, 2, 3].zip([4, 5, 6], [7, 8]) # => [[1, 4, 7], [2, 5, 8], [3, 6, undefined]]
		zip: function (...arr) {
			return Array.zip(this, ...arr);
		},

		delete: function (...items) {
			let result = Array.new();
			for (let i = 0; i < this.length; ++i) {
				if (items.includes(this[i])) {
					result.push(this[i]);
					this.splice(i, 1);
					--i;
				}
			}
			return result;
		}
	}
});