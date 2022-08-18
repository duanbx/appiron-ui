'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var table = require('./table');
var tablePopover = require('./table-popover');



Object.keys(table).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return table[k]; }
	});
});
Object.keys(tablePopover).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return tablePopover[k]; }
	});
});
