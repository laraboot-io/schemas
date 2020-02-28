const Relationships = require('./relationships');
const {hasMany} = Relationships.definitions;

module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
        "table": {
            "definitions": {
                "column": {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string"}
                    }
                },
                "relationshipType": {
                    "type": "object",
                    "properties": Relationships.definitions,
                    "additionalProperties": false
                }
            },
            "type": "object",
            "properties": {
                "version": {"type": "number"},
                "description": {"type": "string"},
                "columns": {
                    "type": "array",
                    "minItems": 1,
                    "items": {"$ref": "#/definitions/table/definitions/column"}
                },
                "relationships": {
                    "type": "array",
                    "minItems": 1,
                    "items": {"$ref": "#/definitions/table/definitions/relationshipType"}
                }
            },
            //"additionalProperties": false,
            "required": ["name", "version", "columns"]
        }
    },

    "type": "object",
    "allOf": [
        {"$ref": "#/definitions/table"},
    ],
    "properties": {
        "features": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },

    "additionalProperties": false
};
