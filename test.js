'use strict'

var test = require('tape')
var utmify = require('./')

test(function (t) {
  t.deepEqual(utmify({campaign: 'git'}), {
    utm_campaign: 'git'
  })
  t.deepEqual(utmify({campaign: 'git', foo: 'bar'}), {
    utm_campaign: 'git'
  })
  t.deepEqual(utmify({campaign: ''}), {})
  t.end()
})
