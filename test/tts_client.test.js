'use strict'

var expect = require('chai').expect
var tts = require('../')('accountID', 'password')

describe('TTSClient', function () {
  describe('#ConvertSimple()', function () {
    var promise, result

    it('should get result without error', function (done) {
      promise = tts.ConvertSimple('Test the convert simple function', function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        result = res
        done()
      })
    })

    it('should return promise', function () {
      return promise.then(function (res) {
        expect(res).to.exist
        expect(res).to.equal(result)
      })
    })
  })

  describe('#ConvertText()', function () {
    var promise, result

    it('should get result without error', function (done) {
      var options = {
        TTStext: 'Test the convert text function',
        TTSSpeaker: 'Bruce',
        volume: 100,
        speed: 0,
        outType: 'wav'
      }

      promise = tts.ConvertText(options, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        result = res
        done()
      })
    })

    it('should return promise', function () {
      return promise.then(function (res) {
        expect(res).to.exist
        expect(res).to.equal(result)
      })
    })
  })

  describe('#ConvertAdvancedText()', function () {
    var promise, result

    it('should get result without error', function (done) {
      var options = {
        TTStext: 'Test the convert advanced text function',
        TTSSpeaker: 'Bruce',
        volume: 100,
        speed: 0,
        outType: 'wav',
        PitchLevel: 0,
        PitchSign: 0,
        PitchScale: 5
      }

      promise = tts.ConvertAdvancedText(options, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        result = res
        done()
      })
    })

    it('should return promise', function () {
      return promise.then(function (res) {
        expect(res).to.exist
        expect(res).to.equal(result)
      })
    })
  })

  describe('#GetConvertStatus()', function () {
    var promise, result

    it('should get result without error', function (done) {
      promise = tts.GetConvertStatus(1234567890, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'statusCode', 'status', 'resultUrl')
        result = res
        done()
      })
    })

    it('should return promise', function () {
      return promise.then(function (res) {
        expect(res).to.exist
        expect(res).to.equal(result)
      })
    })
  })
})
