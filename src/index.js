const ZSchema = require("z-schema");
const validator = new ZSchema();
const yaml = require('js-yaml');
const schemas = require("../schemas/table_schema.js");
let errors = {};

module.exports = {
    /**
     * validate yaml content against default schema
     * @param stringYaml
     */
    validateYaml: function (stringYaml) {
        const object = yaml.safeLoad(stringYaml);
        const defaultSchema = schemas[schemas.length - 1];
        validator.validateSchema(schemas);
        const valid = validator.validate(object, defaultSchema);
        return valid;
    },
    validateObject: function (object) {
        validator.validateSchema(schemas);
        const defaultSchema = schemas[schemas.length - 1];
        const valid = validator.validate(object, defaultSchema);
        return valid;
    },

    getValidationErrors: () => validator.getLastErrors(),

    yamlToObject(stringYaml) {
        return yaml.safeLoad(stringYaml);
    },
    getSchemas: function () {
        return schemas;
    }
};
