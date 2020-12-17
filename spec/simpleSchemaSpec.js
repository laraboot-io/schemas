const fs = require('fs');
const path = require('path');
const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const validator = require('../src/index')

describe("Simple Schema Spec", function () {

    it("validates one model schema", function () {
        const filename = path.resolve(__dirname, 'data/one_model_doc.yml');
        const contents = fs.readFileSync(filename, 'utf8');
        const valid = validator.validateYaml(contents, {schemaPath: ""});
        expect(valid).toBeTruthy();
    });

    it("validates multiple model schema", function () {
        const filename = path.resolve(__dirname, 'data/multiple_models_doc.yml');
        const contents = fs.readFileSync(filename, 'utf8');
        const valid = validator.validateYaml(contents, {});
        expect(valid).toBeTruthy();
    });

    it('expose last errors by calling getValidationErrors', function () {
        const valid = validator.validateYaml(null);
        expect(valid).toBe(false);
        expect(validator.getValidationErrors()).toBeTruthy();
    })
});
