'use strict';
var should = require('should');
var TTSClient = require('../');

describe('itri-tts node module', function () {

  var tts = new TTSClient('accountID', 'password');

  describe('ConvertSimple', function () {
    it('should return result without err', function (done) {
      tts.ConvertSimple('Testing ConvertSimple', function (err, result) {
        should.not.exist(err);
        should.exist(result);
        done();
      });
    });
  });

  describe('ConvertText', function () {
    it('should return result without err', function (done) {
      var options = {
        TTStext: 'Testing ConvertText',
        TTSSpeaker: 'Bruce',
        volume: 100,
        speed: 0,
        outType: 'wav'
      };
      tts.ConvertText(options, function (err, result) {
        should.not.exist(err);
        should.exist(result);
        done();
      });
    });
  });

  describe('ConvertAdvancedText', function () {
    it('should return result without err', function (done) {
      var options = {
        TTStext: 'Testing ConvertAdvancedText',
        TTSSpeaker: 'Bruce',
        volume: 100,
        speed: 0,
        outType: 'wav',
        PitchLevel: 0,
        PitchSign: 0,
        PitchScale: 5
      };
      tts.ConvertAdvancedText(options, function (err, result) {
        should.not.exist(err);
        should.exist(result);
        done();
      });
    });
  });

  describe('GetConvertStatus', function () {
    it('should return result without err', function (done) {
      tts.GetConvertStatus(1234567890, function (err, result) {
        should.not.exist(err);
        should.exist(result);
        done();
      });
    });
  });

});
