const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const schema = require('../schemas')

describe("Relationship Schema Spec", function () {
    it('compiles the full schema definition', function () {
        const schemaWithTables = {
            tables:
                [
                    {
                        name: 'stores',
                        version: 3.14,
                        description: 'Stores table',
                        columns: [{name: 'id'}]
                    },
                    {
                        name: 'owners',
                        version: 3.14,
                        description: 'Owners table',
                        columns: [{name: 'id'}],
                        relationships: [{
                            "hasMany" : "stores"
                        }]
                    }]
        };
        expect(zSchema.validateSchema(schema)).toBe(true);
        expect(zSchema.validate(schemaWithTables, schema)).toBe(true);
        console.info(zSchema.getLastErrors())
    })
});
