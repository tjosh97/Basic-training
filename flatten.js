function flatten(unflatObject) {
  const flattenObj = (unflatObject, parent, res = {}) => {
  for (const key of Object.keys(unflatObject)) {
    const propName = parent ? parent + '.' + key : key;
    if (typeof unflatObject[key] === 'object') {
      flattenObj(unflatObject[key], propName, res);
    } else {
      res[propName] = unflatObject[key];
    }
  }
  return res;
  
}

const flattened = flattenObj(unflatObject)
return flattened;
}
