const path = require('path');
const fs = require('fs');
const ZSchema = require("z-schema");

ZSchema.setSchemaReader(function (uri) {
    const domain = uri.replace('http://', '').replace('#', '')
    var someFilename = path.resolve(__dirname, "..", "schemas", domain + ".json");
    return JSON.parse(fs.readFileSync(someFilename, "utf8"));
});

const {customValidatorFn} = require('./validators');
const validator = new ZSchema({
    // register our custom validator inside z-schema
    customValidator: customValidatorFn
});
const yaml = require('js-yaml');
const {v1} = require("../schemas");
let errors = {};

module.exports = {
    /**
     * validate yaml content against default schema
     * @param stringYaml
     */
    validateYaml: function (stringYaml, options) {
        const object = yaml.safeLoad(stringYaml);
        validator.validateSchema(v1);
        const valid = validator.validate(object, v1, options);
        return valid;
    },
    /**
     *
     * @param object
     * @param options
     */
    validateObject: function (object, options) {
        validator.validateSchema(v1);
        const valid = validator.validate(object, v1, options);
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
