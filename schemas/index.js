const TableSchema = require('./table_schema');
const {table} = TableSchema.definitions;

module.exports = {
    "definitions": {
        table,
        "tables": {
            "type": "array",
            "items": {"$ref": "#/definitions/table"},
            "minItems": 1,
        }
    },

    "type": "object",

    "properties": {
        "tables": {"$ref": "#/definitions/tables"}
    },

    "required": ["tables"]
};
