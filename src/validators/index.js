function customValidatorFn(report, schema, json) {
    // check if our custom property is present
    if (typeof json == 'object' && Array.isArray(json.tables)) {
        let relThree = new Set();
        const tableNames = new Set(json.tables.map(e => e.name));
        json.tables.forEach((table) => {
            if (table.relationships) {
                const tableRelationships = table.relationships.map(e => Object.values(e));
                tableRelationships.forEach((v) => {
                    const name = v[0];
                    if (!tableNames.has(name)) {
                        // report error back to z-schema core
                        report.addCustomError("NO_SUCH_TABLE",
                            "Table \"{0}\" does not exist in the schema",
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
