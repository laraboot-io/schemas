module.exports = [
    {
        id: "tableDetails",
        type: "object",
        properties: {
            version: {type: "float", "maxLength": 5},
            description: {type: "string"},
        },
        required: ["tableDetails"]
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
            {$ref: "columnDetails"},
            {$ref: "featureDetails"}
        ],
        anyOf: []
    }
];