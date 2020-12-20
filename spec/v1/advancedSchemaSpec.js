const path = require('path')
const fs = require('fs')
const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const yaml = require('js-yaml');
const {v1} = require('../../schemas')

describe("Advanced Schema Spec", function () {
    it('compiles the full schema definition', function () {
        const filename = path.resolve(__dirname, '../data/multiple_models_doc.yml');
        const schemaWithTables = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
        expect(zSchema.validateSchema(v1)).toBeTruthy();
        expect(zSchema.validate(schemaWithTables, v1)).toBeTruthy();
        console.info(zSchema.getLastErrors())
    })
});
