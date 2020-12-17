/**
 *
 * @param report
 * @param schema
 * @param json
 */
function customValidatorFn(report, schema, json) {
    // check if our custom property is present
    if (typeof json == 'object' && Array.isArray(json.models)) {
        const {models} = json;
        let relThree = new Set();
        const modelNames = new Set(models.map(e => e.name));
        models.forEach((model) => {
            if (model.relationships) {
                const modelRelationships = model.relationships.map(e => Object.values(e));
                modelRelationships.forEach((v) => {
                    const name = v[0];
                    if (!modelNames.has(name)) {
                        // report error back to z-schema core
                        report.addCustomError("NO_SUCH_model",
                            "model \"{0}\" does not exist in the schema",
                            [name], null, schema.description);
                    }
                    if (!relThree.has(name))
                        relThree.add(name);
                });
                //relThree = Object.assign(relThree, values)
                console.log('relationships', relThree)
            }
        })
    }
}

module.exports = {customValidatorFn};
