
exports.min = function min (array) {
  return array === 0 ? 0 : array.reduce((a,e) => a < e ? a : e);
}

exports.max = function max (array) {
  return array === 0 ? 0 : array.reduce((a,e) => a > e ? a : e);
}

exports.avg = function avg (array) {
  return array.length === 0 ? 0 : (array.reduce((a,e) => a + e))/array.length;
}
