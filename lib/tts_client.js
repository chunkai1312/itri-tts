'use strict'

var Promise = require('bluebird')
var soap = require('soap')
var _ = require('lodash')
var url = 'http://tts.itri.org.tw/TTSService/Soap_1_3.php?wsdl'

/**
 * Create a new TTSClient.
 *
 * @public
 * @constructor
 * @param  {string} accountID - Account ID
 * @param  {string} password - Password
 * @return {object} TTSClient instance
 */
var TTSClient = function (accountID, password) {
  if (!(this instanceof TTSClient)) {
    return new TTSClient(accountID, password)
  }
  this.accountID = accountID
  this.password = password
}

/**
 * Create ITRI TTS SOAP clicnt.
 *
 * @private
 * @method
 * @return {Promise} The SOAP client of ITRI TTS.
 */
TTSClient.prototype.createClient = function () {
  return new Promise(function (resolve, reject) {
    soap.createClient(url, function (err, client) {
      if (err) reject(err)
      resolve(client)
    })
  })
}

/**
 * Parse response data of the request.
 *
 * @private
 * @method
 * @param  {string} result - The response data.
 * @return {objet} The result of parsing.
 */
TTSClient.prototype.parseResult = function (result) {
  var resultArray = result.Result.$value.split('&')
  return {
    resultCode: resultArray[0],
    resultString: resultArray[1],
    resultConvertID: resultArray[2]
  }
}

/**
 * Simply convert text to speech without additional settings.
 *
 * @public
 * @method
 * @param  {string}   text - A text-to-speech string.
 * @param  {function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertSimple = function (text, callback) {
  callback = callback || function () {}

  var self = this
  var args = {
    accountID: this.accountID,
    password: this.password,
    TTStext: text
  }

  return new Promise(function (resolve, reject) {
    self.createClient()
      .then(function (client) {
        client.ConvertSimple(args, function (err, result) {
          if (err) throw err
          var data = self.parseResult(result)
          resolve(data)
          callback(null, data)
        })
      })
      .catch(function (err) {
        reject(err)
        callback(err)
      })
  })
}

/**
 * Convert text to speech with basic settings.
 *
 * @public
 * @method
 * @param  {object}   options
 * @param  {string}   options.TTStext - A text-to-speech string.
 * @param  {string}   options.TTSSpeaker - The speaker can be set to 'Bruce', 'Theresa', 'Angela' (default = 'Bruce').
 * @param  {number}   options.volume - The value can be set from 0 to 100 (default = 100).
 * @param  {number}   options.speed - The value can be set from -10 to 10 (default = 0).
 * @param  {string}   options.outType - The output file type can be set to 'wav', 'flv' (default = 'wav').
 * @param  {function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertText = function (options, callback) {
  callback = callback || function () {}

  var self = this
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
    self.createClient()
      .then(function (client) {
        client.ConvertText(args, function (err, result) {
          if (err) throw err

          var data = self.parseResult(result)
          resolve(data)
          callback(null, data)
        })
      })
      .catch(function (err) {
        reject(err)
        callback(err)
      })
  })
}

/**
 * Convert text to speech with advanced settings.
 *
 * @public
 * @method
 * @param  {object}   options
 * @param  {string}   options.TTStext - A text-to-speech string.
 * @param  {string}   options.TTSSpeaker - The speaker can be set to 'Bruce', 'Theresa', 'Angela' (default = 'Bruce').
 * @param  {number}   options.volume - The value can be set from 0 to 100 (default = 100).
 * @param  {number}   options.speed - The value can be set from -10 to 10 (default = 0).
 * @param  {string}   options.outType - The output file type can be set to 'wav', 'flv' (default = 'wav').
 * @param  {number}   options.PitchLevel - The value can be set from -10 to 10 (default = 0).
 * @param  {number}   options.PitchSign - The value can be set to 0, 1, 2 (default = 0).
 * @param  {number}   options.PitchScale - The value can be set from 0 to 20 (default = 5).
 * @param  {function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.ConvertAdvancedText = function (options, callback) {
  callback = callback || function () {}

  var self = this
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
    self.createClient()
      .then(function (client) {
        client.ConvertAdvancedText(args, function (err, result) {
          if (err) throw err

          var data = self.parseResult(result)
          resolve(data)
          callback(null, data)
        })
      })
      .catch(function (err) {
        reject(err)
        callback(err)
      })
  })
}

/**
 * Get the converted status of text-to-speech.
 *
 * @public
 * @method
 * @param  {number}   convertID - The convert ID for getting the converted status.
 * @param  {function} callback - The callback function for when request is complete.
 * @return {Promise}  The promise with result of the request.
 */
TTSClient.prototype.GetConvertStatus = function (convertID, callback) {
  callback = callback || function () {}

  var self = this
  var args = {
    accountID: this.accountID,
    password: this.password,
    convertID: convertID
  }

  return new Promise(function (resolve, reject) {
    self.createClient()
      .then(function (client) {
        client.GetConvertStatus(args, function (err, result) {
          if (err) throw err

          var resultArray = (result.Result.$value).split('&')
          var data = {
            resultCode: resultArray[0],
            resultString: resultArray[1],
            statusCode: resultArray[2],
            status: resultArray[3],
            resultUrl: resultArray[4]
          }
          resolve(data)
          callback(null, data)
        })
      })
      .catch(function (err) {
        reject(err)
        callback(err)
      })
  })
}

module.exports = TTSClient
