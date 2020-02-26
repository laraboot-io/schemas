const ZSchema = require("z-schema");
const validator = new ZSchema();

const json = require("./data/dumper.json");
const schemas = require("./data/table_schema.js");

describe("Simple Schema Spec", function () {
    it("validates example schema", function () {
        const valid = validator.validate(json, schemas[schemas.length - 1]);
        console.info(validator.getLastErrors())
        expect(valid).toBe(true);
    })
});
