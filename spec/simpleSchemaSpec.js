const fs = require('fs');
const path = require('path');
const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const validator = require('../src/index')

describe("Simple Schema Spec", function () {
    it('default schema is valid', function () {
        const schemas = require("../schemas/table_schema.js");
        expect(zSchema.validateSchema(schemas)).toBeTruthy();
    });

    it("validates example schema", function () {
        const filename = path.resolve(__dirname, 'data/sample_document.yml');
        const contents = fs.readFileSync(filename, 'utf8');
        const valid = validator.validateYaml(contents);
        expect(valid).toBeTruthy();
    });

    it('expose last errors by calling getValidationErrors', function () {
        const filename = path.resolve(__dirname, 'data/bad_document.yml');
        const valid = validator.validateYaml(null);
        expect(valid).toBe(false);
        expect(validator.getValidationErrors()).toBeTruthy();
    })
});
