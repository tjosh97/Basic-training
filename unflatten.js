function unflatten(flatObject) {
 var result = {}
  for (var i in flatObject) {
    var keys = i.split('.')
    keys.reduce(function(r, e, j) {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? flatObject[i] : {}) : [])
    }, result)
  }
  return result
}
