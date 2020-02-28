const allSchemas = [
    {
        "id": "tableDetails",
        "type": "object",
        "properties": {
            "version": {type: "number", "maxLength": 5},
            "description": {type: "string"},
        },
        "required": ["version"]
    },
    {
        "id": "featureDetails",
        "type": "object",
        "properties": {
            "features": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    {
        "id": "columnDetails",
        "type": "object",
        "properties": {
            "columns": {
                "type": "array",
                "items": {
                    "type": "object"
                }
            }
        },
        "required": ["columns"]
    },
    {
        "id": "tableWithFeatures",
        "allOf": [
            {$ref: "tableDetails"},
            {$ref: "columnDetails"}
        ],
        "anyOf": [
            {$ref: "featureDetails"}
        ]
    }
];
module.exports = allSchemas;
