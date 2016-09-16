'use strict'

var Promise = require('bluebird')
var soap = require('soap')
var _ = require('lodash')
var url = 'http://tts.itri.org.tw/TTSService/Soap_1_3.php?wsdl'

/**
 * TTSClient constroctor.
 *
 * @class TTSClient
 * @constructor
 * @param  {String} accountID - Account ID
 * @param  {String} password  - Password
 * @return {Object} TTSClient instance
 */
var TTSClient = function (accountID, password) {
  if (!(this instanceof TTSClient)) {
    return new TTSClient(accountID, password)
  }
  this.accountID = accountID
  this.password = password
}

/**
 * Simply convert text to speech without additional settings.
 *
 * @method ConvertSimple
 * @param  {String}   text     - A text-to-speech string.
 * @param  {Function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertSimple = function (text, callback) {
  callback = callback || function () {}

  var args = {
    accountID: this.accountID,
    password: this.password,
    TTStext: text
  }

  return new Promise(function (resolve, reject) {
    soap.createClient(url, function (err, client) {
      if (err) {
        reject(err)
        return callback(err)
      }

      client.ConvertSimple(args, function (err, result) {
        if (err) {
          reject(err)
          return callback(err)
        }

        var resultArray = (result.Result.$value).split('&')
        var data = {
          resultCode: resultArray[0],
          resultString: resultArray[1],
          resultConvertID: resultArray[2]
        }

        resolve(data)
        return callback(null, data)
      })
    })
  })
}

/**
 * Convert text to speech with basic settings.
 *
 * @method ConvertText
 * @param  {Object}   options
 * @param  {String}   options.TTStext - A text-to-speech string.
 * @param  {String}   options.TTSSpeaker - The speaker can be set to 'Bruce', 'Theresa', 'Angela' (default = 'Bruce').
 * @param  {Number}   options.volume - The value can be set from 0 to 100 (default = 100).
 * @param  {Number}   options.speed - The value can be set from -10 to 10 (default = 0).
 * @param  {String}   options.outType - The output file type can be set to 'wav', 'flv' (default = 'wav').
 * @param  {Function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertText = function (options, callback) {
  callback = callback || function () {}

  var defaults = {
    accountID: this.accountID,
    password: this.password,
    TTStext: '',
    TTSSpeaker: 'Bruce',
    volume: 100,
    speed: 0,
    outType: 'wav'
  }

  var args = (typeof options === 'object') ? _.extend(defaults, options) : defaults

  return new Promise(function (resolve, reject) {
    soap.createClient(url, function (err, client) {
      if (err) {
        reject(err)
        return callback(err)
      }

      client.ConvertText(args, function (err, result) {
        if (err) {
          reject(err)
          return callback(err)
        }

        var resultArray = (result.Result.$value).split('&')
        var data = {
          resultCode: resultArray[0],
          resultString: resultArray[1],
          resultConvertID: resultArray[2]
        }

        resolve(data)
        return callback(null, data)
      })
    })
  })
}

/**
 * Convert text to speech with advanced settings.
 *
 * @method ConvertAdvancedText
 * @param  {Object}   options
 * @param  {String}   options.TTStext - A text-to-speech string.
 * @param  {String}   options.TTSSpeaker - The speaker can be set to 'Bruce', 'Theresa', 'Angela' (default = 'Bruce').
 * @param  {Number}   options.volume - The value can be set from 0 to 100 (default = 100).
 * @param  {Number}   options.speed - The value can be set from -10 to 10 (default = 0).
 * @param  {String}   options.outType - The output file type can be set to 'wav', 'flv' (default = 'wav').
 * @param  {Number}   options.PitchLevel - The value can be set from -10 to 10 (default = 0).
 * @param  {Number}   options.PitchSign - The value can be set to 0, 1, 2 (default = 0).
 * @param  {Number}   options.PitchScale - The value can be set from 0 to 20 (default = 5).
 * @param  {Function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertAdvancedText = function (options, callback) {
  callback = callback || function () {}

  var defaults = {
    accountID: this.accountID,
    password: this.password,
    TTStext: '',
    TTSSpeaker: 'Bruce',
    volume: 100,
    speed: 0,
    outType: 'wav',
    PitchLevel: 0,
    PitchSign: 0,
    PitchScale: 5
  }

  var args = (typeof options === 'object') ? _.extend(defaults, options) : defaults

  return new Promise(function (resolve, reject) {
    soap.createClient(url, function (err, client) {
      if (err) {
        reject(err)
        return callback(err)
      }

      client.ConvertAdvancedText(args, function (err, result) {
        if (err) {
          reject(err)
          return callback(err)
        }

        var resultArray = (result.Result.$value).split('&')
        var data = {
          resultCode: resultArray[0],
          resultString: resultArray[1],
          resultConvertID: resultArray[2]
        }

        resolve(data)
        return callback(null, data)
      })
    })
  })
}

/**
 * Get the converted status of text-to-speech.
 *
 * @method GetConvertStatus
 * @param  {Number}   convertID - The convert ID for getting the converted status.
 * @param  {Function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.GetConvertStatus = function (convertID, callback) {
  callback = callback || function () {}

  var args = {
    accountID: this.accountID,
    password: this.password,
    convertID: convertID
  }

  return new Promise(function (resolve, reject) {
    soap.createClient(url, function (err, client) {
      if (err) {
        reject(err)
        return callback(err)
      }

      client.GetConvertStatus(args, function (err, result) {
        if (err) {
          reject(err)
          return callback(err)
        }

        var resultArray = (result.Result.$value).split('&')
        var data = {
          resultCode: resultArray[0],
          resultString: resultArray[1],
          statusCode: resultArray[2],
          status: resultArray[3],
          resultUrl: resultArray[4]
        }

        resolve(data)
        return callback(null, data)
      })
    })
  })
}

module.exports = TTSClient
