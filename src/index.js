
exports.min = function min (array) {
  return !array ? 0 : array.reduce((a,e) => a < e ? a : e, 0);
}

exports.max = function max (array) {
  return !array ? 0 : array.reduce((a,e) => a > e ? a : e, 0);
}

exports.avg = function avg (array) {
  return array === undefined || array == 0  || array == '' ? 0 : array.reduce((a,e) => a + e)/array.length
}
