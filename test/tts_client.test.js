'use strict'

var expect = require('chai').expect
var tts = require('../')('accountID', 'password')

describe('TTSClient', function () {
  describe('#ConvertSimple()', function () {
    it('should return result without err', function (done) {
      tts.ConvertSimple('Test the convert simple function', function (err, result) {
        expect(err).to.not.exist
        expect(result).to.exist
        done()
      })
    })
  })

  describe('#ConvertText()', function () {
    it('should return result without err', function (done) {
      var options = {
        TTStext: 'Test the convert text function',
        TTSSpeaker: 'Bruce',
        volume: 100,
        speed: 0,
        outType: 'wav'
      }
      tts.ConvertText(options, function (err, result) {
        expect(err).to.not.exist
        expect(result).to.exist
        done()
      })
    })
  })

  describe('#ConvertAdvancedText()', function () {
    it('should return result without err', function (done) {
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
      tts.ConvertAdvancedText(options, function (err, result) {
        expect(err).to.not.exist
        expect(result).to.exist
        done()
      })
    })
  })

  describe('#GetConvertStatus()', function () {
    it('should return result without err', function (done) {
      tts.GetConvertStatus(1234567890, function (err, result) {
        expect(err).to.not.exist
        expect(result).to.exist
        done()
      })
    })
  })
})
