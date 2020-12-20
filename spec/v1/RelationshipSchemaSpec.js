const ZSchema = require("z-schema");
const {customValidatorFn} = require('../../src/validators');
const zSchema = new ZSchema({
    customValidator: customValidatorFn
});
const {v1, v2} = require('../../schemas');
const schemaWithModels = {
    Framework: {
        models:
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
    }
};
const wrongschemaWithModels = {
    Framework: {
        models:
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
    }
};

describe("Relationship Schema Spec", function () {
    it('validates one-to-many relationship', function () {
        zSchema.validateSchema(v1);
        expect(zSchema.validate(schemaWithModels, v1)).toBeTruthy();
    });

    it('validates wrong one-to-many relationship', function () {
        zSchema.validateSchema(v1);
        expect(zSchema.validate(wrongschemaWithModels, v1)).toBeFalsy();
        const validations = zSchema.getLastErrors();
        expect(validations.length).toBeGreaterThan(0);
        expect(validations[0].code).toBe("NO_SUCH_MODEL");
    })
});
