const TableSchema = require('./table_schema');
const {table} = TableSchema.definitions;

module.exports = {
    "definitions": {
        table,
        "tables": {
            "type": "array",
            "items": {"$ref": "#/definitions/table"},
            "default": []
        }
    },

    "type": "object",

    "properties": {
        "tables": {"$ref": "#/definitions/tables"}
    },

    "required": ["tables"]
};
