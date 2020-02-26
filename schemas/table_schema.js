const allSchemas = [
    {
        id: "tableDetails",
        type: "object",
        properties: {
            version: {type: "number", "maxLength": 5},
            description: {type: "string"},
        },
        required: ["version"]
    },
    {
        id: "featureDetails",
        type: "array",
        items: [
            {
                "type": "number"
            }
        ],
        "additionalItems": false
    },
    {
        id: "columnDetails",
        type: "object",
        properties: {
            "name": {"type": "string"}
        }
    },
    {
        id: "tableWithFeatures",
        allOf: [
            {$ref: "tableDetails"},
            {$ref: "columnDetails"}
        ]
    }
];
module.exports = allSchemas;
