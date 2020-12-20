// V1
const FrameworkSchema = require('./library/framework');

module.exports.v1 = {
    "definitions": {
        "Framework": FrameworkSchema.definitions
    },
    "type": "object",
    "properties": {
        "Framework": {"$ref": "#/definitions/Framework", "type": "object"}
    },
    "required": ["Framework"]
};

// V2
const schema = require('../schema')
module.exports.v2 = schema;
