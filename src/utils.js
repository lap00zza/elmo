/**
 * This helper function is used to maintain type consistency.
 * @param {Array} params
 */
export function typeChecker (params) {
  for (var i = 0; i < params.length; i++) {
    if (params[i].pTypes.indexOf(typeof params[i].pValue) === -1) {
      throw new Error('Type Error', params[i].pName + ' must be of these types: ' + params[i].pTypes.join())
    }
  }
}
