/*eslint-env mocha */
/*global expect:true */

'use strict'

var defaults = require('./')
  , expect = require('chai').expect

describe('object defaults', function() {
  it('copies properties from source to target', function() {
    expect(defaults({ foo: 1 }, { bar: 1 })).to.eql({ foo: 1, bar: 1 })
  })

  it('does not override properties', function() {
    expect(defaults({ foo: 1 }, { foo: 2, bar: 1 })).to.eql({ foo: 1, bar: 1 })
  })

  it('copies from left to right', function() {
    expect(defaults({ foo: 1 }, { bar: 1 }, { bar: 2, baz: 1 })).to.eql({ foo: 1, bar: 1, baz: 1 })
  })

  it('accepts only a target', function() {
    expect(defaults({ foo: 1 })).to.eql({ foo: 1 })
  })

  it('accepts a falsy target', function() {
    [false, '', 0, null, undefined, NaN].forEach(function(val) {
      expect(defaults(val, { foo: 1 })).to.eql({ foo: 1 })
    })
  })

  it('ignores falsy sources', function() {
    [false, '', 0, null, undefined, NaN].forEach(function(val) {
      expect(defaults({ foo: 1 }, val, { bar: 1 })).to.eql({ foo: 1, bar: 1 })
    })
  })

  it('returns an empty object when no arguments are specified', function() {
    expect(defaults()).to.eql({})
  })
})
