'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components$1 = require('appiron-ui/lib/components');

const components = [components$1.ATable, components$1.ATablePopover];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

exports["default"] = index;
Object.keys(components$1).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return components$1[k]; }
  });
});
