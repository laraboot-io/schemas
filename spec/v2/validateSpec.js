const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const {v2} = require('../../schemas')

describe("Core", function () {
    it('compiles the whole schema definition', function () {
        expect(zSchema.validateSchema(v2)).toBeTruthy()
        console.log(zSchema.getLastErrors());
    })
});
