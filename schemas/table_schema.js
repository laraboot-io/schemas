module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
        "column": {
            "type": "object",
            "properties": {
                "name": {"type": "string"}
            }
        },
        "table": {
            "type": "object",
            "properties": {
                "columns": {
                    "type": "array",
                    "items": {"type": "object"}
                }
            },
            "required": ["columns"]
        }
    },

    "type": "object",

    "properties": {
        "version": {"type": "number"},
        "description": {"type": "string"},
        "allOf": [
            {"$ref": "#/definitions/table"}
        ],
        "features": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
};
