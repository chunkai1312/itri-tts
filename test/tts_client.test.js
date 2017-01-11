'use strict'

var Promise = require('bluebird')
var expect = require('chai').expect
var sinon = require('sinon')
var tts = require('../')('accountID', 'password')

describe('TTSClient', function () {
  var sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('#ConvertSimple()', function () {
    it('should get result without error', function (done) {
      tts.ConvertSimple('Test the convert simple function', function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        done()
      })
    })

    it('should return promise', function () {
      return tts.ConvertSimple('Test the convert simple function').then(function (res) {
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
      })
    })

    it('should exist error if cannot connect to ITRI TTS server', function (done) {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      tts.ConvertSimple('Test the convert simple function', function (err, res) {
        expect(err).to.exist
        expect(err).to.be.an('error')
        expect(res).to.not.exist
        done()
      })
    })

    it('should throw error if cannot connect to ITRI TTS CKIP server', function () {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      return tts.ConvertSimple('Test the convert simple function').catch(function (err) {
        expect(err).to.be.an('error')
      })
    })
  })

  describe('#ConvertText()', function () {
    var options = {
      TTStext: 'Test the convert text function',
      TTSSpeaker: 'Bruce',
      volume: 100,
      speed: 0,
      outType: 'wav'
    }

    it('should get result without error', function (done) {
      tts.ConvertText(options, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        done()
      })
    })

    it('should return promise', function () {
      return tts.ConvertText(options).then(function (res) {
        expect(res).to.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
      })
    })

    it('should exist error if cannot connect to ITRI TTS server', function (done) {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      tts.ConvertText(options, function (err, res) {
        expect(err).to.exist
        expect(err).to.be.an('error')
        expect(res).to.not.exist
        done()
      })
    })

    it('should throw error if cannot connect to ITRI TTS CKIP server', function () {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      return tts.ConvertText(options).catch(function (err) {
        expect(err).to.be.an('error')
      })
    })
  })

  describe('#ConvertAdvancedText()', function () {
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

    it('should get result without error', function (done) {
      tts.ConvertAdvancedText(options, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
        done()
      })
    })

    it('should return promise', function () {
      return tts.ConvertAdvancedText(options).then(function (res) {
        expect(res).to.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'resultConvertID')
      })
    })

    it('should exist error if cannot connect to ITRI TTS server', function (done) {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      tts.ConvertAdvancedText(options, function (err, res) {
        expect(err).to.exist
        expect(err).to.be.an('error')
        expect(res).to.not.exist
        done()
      })
    })

    it('should throw error if cannot connect to ITRI TTS CKIP server', function () {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      return tts.ConvertAdvancedText(options).catch(function (err) {
        expect(err).to.be.an('error')
      })
    })
  })

  describe('#GetConvertStatus()', function () {
    it('should get result without error', function (done) {
      tts.GetConvertStatus(1234567890, function (err, res) {
        expect(err).to.not.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'statusCode', 'status', 'resultUrl')
        done()
      })
    })

    it('should return promise', function () {
      return tts.GetConvertStatus(1234567890).then(function (res) {
        expect(res).to.exist
        expect(res).to.exist
        expect(res).to.be.an('object')
        expect(res).to.include.keys('resultCode', 'resultString', 'statusCode', 'status', 'resultUrl')
      })
    })

    it('should exist error if cannot connect to ITRI TTS server', function (done) {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      tts.GetConvertStatus(1234567890, function (err, res) {
        expect(err).to.exist
        expect(err).to.be.an('error')
        expect(res).to.not.exist
        done()
      })
    })

    it('should throw error if cannot connect to ITRI TTS CKIP server', function () {
      sandbox.stub(tts, 'createClient').returns(Promise.reject(new Error()))

      return tts.GetConvertStatus(1234567890).catch(function (err) {
        expect(err).to.be.an('error')
      })
    })
  })
})
