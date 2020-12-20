const HasMany = require('./hasMany');
const {hasMany} = HasMany.definitions

module.exports = module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
        hasMany
    },

    "type": "object",
    "properties": {
        "anyOf": [
            {"$ref": "#/definitions/hasMany"}
        ]
    }
};
