export function keysToDefinitionList(keys:string[], entity:any, jsxTemplateMapFunction) {
    return keys
        .map(key => {
            const keyValue = entity[key];

            return (keyValue) ? { key, keyValue } : null;
        })
        .filter(dataObj => (dataObj !== null))
        .map(jsxTemplateMapFunction)
        .reduce((acc, curr) => (acc as any[]).concat(curr), []);
}