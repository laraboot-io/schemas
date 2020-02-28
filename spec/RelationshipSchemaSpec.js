const ZSchema = require("z-schema");
const {customValidatorFn} = require('../src/validators');
const zSchema = new ZSchema({
    customValidator: customValidatorFn
});
const schema = require('../schemas');
const schemaWithTables = {
    tables:
        [
            {
                name: 'pets',
                version: 3.14,
                description: 'pets table',
                columns: [{name: 'id'}]
            },
            {
                name: 'users',
                version: 3.14,
                description: 'Users table',
                columns: [{name: 'id'}],
                relationships: [{
                    "hasMany": "pets"
                }]
            }]
};
const wrongSchemaWithTables = {
    tables:
        [
            {
                name: 'pets',
                version: 3.14,
                description: 'pets table',
                columns: [{name: 'id'}]
            },
            {
                name: 'users',
                version: 3.14,
                description: 'Users table',
                columns: [{name: 'id'}],
                relationships: [{
                    "hasMany": "petsies"
                }]
            }]
};

describe("Relationship Schema Spec", function () {
    it('validates one-to-many relationship', function () {
        zSchema.validateSchema(schema);
        expect(zSchema.validate(schemaWithTables, schema)).toBeTruthy();
    });

    it('validates wrong one-to-many relationship', function () {
        zSchema.validateSchema(schema);
        expect(zSchema.validate(wrongSchemaWithTables, schema)).toBeFalsy();
        const validations = zSchema.getLastErrors();
        expect(validations.length).toBeGreaterThan(0);
        expect(validations[0].code).toBe("NO_SUCH_TABLE");
    })
});
