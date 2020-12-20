const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const {v1, v2} = require('../../schemas')

describe("Core", function () {
    it('compiles the whole schema definition', function () {
        expect(zSchema.validateSchema(v1)).toBeTruthy()
        console.log(zSchema.getLastErrors());
    })
});
