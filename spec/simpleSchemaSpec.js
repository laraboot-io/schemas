const fs = require('fs');
const path = require('path');
const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const validator = require('../src/index')

describe("Simple Schema Spec", function () {
    it('default schema is valid', function () {
        const schemas = require("../schemas/table_schema.js");
        expect(zSchema.validateSchema(schemas)).toBeTruthy();
    })
    it("validates example schema", function () {
        const filename = path.resolve(__dirname, 'data/sample_document.yml');
        const contents = fs.readFileSync(filename, 'utf8');
        const valid = validator.validateYaml(contents);
        expect(valid).toBeTruthy();
    })
});
