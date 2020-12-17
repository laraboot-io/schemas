const config = require('./config');
const custom = require('./custom');
const models = require('./models');

module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        config: config.definitions,
        custom: custom.definitions,
        models: models.definitions,
    },
    "type": "object",
    "properties": {
        "anyOf": [
            {"$ref": "#/definitions/config"}
        ]
    }
};
