'use strict'

var Hash = require('array-to-hash')

var methods = Hash([
  'source',
  'medium',
  'term',
  'content',
  'campaign'
])
var valid = Object.prototype.hasOwnProperty.bind(methods)

module.exports = function utmify (params) {
  return Object
    .keys(params)
    .filter(valid)
    .reduce(accumulate, {})

  function accumulate (acc, key) {
    acc['utm_' + key] = params[key]
    return acc
  }
}
