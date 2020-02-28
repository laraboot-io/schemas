const ZSchema = require("z-schema");
const validator = new ZSchema();
const yaml = require('js-yaml');
const schema = require("../schemas");
let errors = {};

module.exports = {
    /**
     * validate yaml content against default schema
     * @param stringYaml
     */
    validateYaml: function (stringYaml, options) {
        const object = yaml.safeLoad(stringYaml);
        validator.validateSchema(schema);
        const valid = validator.validate(object, schema, options);
        return valid;
    },
    validateObject: function (object, options) {
        validator.validateSchema(schema);
        const valid = validator.validate(object, schema, options);
        return valid;
    },

    getValidationErrors: () => validator.getLastErrors(),

    yamlToObject(stringYaml) {
        return yaml.safeLoad(stringYaml);
    },
    getSchemas: function () {
        return schema;
    }
};
