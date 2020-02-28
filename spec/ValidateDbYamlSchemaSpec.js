const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const schema = require('../schemas')

describe("Core", function () {
    it('compiles the full schema definition', function () {
        expect(zSchema.validateSchema(schema)).toBeTruthy()
        console.log(zSchema.getLastErrors());
    })
});
