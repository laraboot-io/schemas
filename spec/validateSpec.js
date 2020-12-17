const ZSchema = require("z-schema");
const zSchema = new ZSchema();
const schema = require('../schemas')

describe("Core", function () {
    it('compiles the whole schema definition', function () {
        console.info(JSON.stringify(schema, null, 3));
        expect(zSchema.validateSchema(schema)).toBeTruthy()
        console.log(zSchema.getLastErrors());
    })
});
