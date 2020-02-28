const ZSchema = require("z-schema");
const {customValidatorFn} = require('./validators');
const validator = new ZSchema({
    // register our custom validator inside z-schema
    customValidator: customValidatorFn
});
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
