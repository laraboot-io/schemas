const FrameworkSchema = require('./framework');

module.exports = {
    "definitions": {
        "Framework": FrameworkSchema.definitions
    },
    "type": "object",
    "properties": {
        "Framework": {"$ref": "#/definitions/Framework", "type": "object"}
    },
    "required": ["Framework"]
};
