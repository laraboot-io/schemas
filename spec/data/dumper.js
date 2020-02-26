'use strict';

/*eslint-disable no-console*/

var yaml = require('js-yaml');
var object = require('./dumper.json');


console.log(yaml.dump(object, {
    flowLevel: 3,
    styles: {
        '!!int'  : 'hexadecimal',
        '!!null' : 'camelcase'
    }
}));