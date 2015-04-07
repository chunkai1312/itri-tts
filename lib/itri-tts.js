"use strict";

var soap = require('soap'),
  URL = 'http://tts.itri.org.tw/TTSService/Soap_1_3.php?wsdl';

/**
 * TTSClient constructor
 * @constructor
 * @param {String} accountID Your account ID
 * @param {String} password  Your password
 */
var TTSClient = function (accountID, password) {
  this.accountID = accountID;
  this.password = password;
};

/**
 * ConvertSimple
 * @param {String}   option   A text-to-speech string
 * @param {Function} callback Callback [fuction (err, data)]
 */
TTSClient.prototype.ConvertSimple = function (text, callback) {
  var args = {
    accountID: this.accountID,
    password: this.password,
    TTStext: text
  };
  soap.createClient(URL, function (err, client) {
    if (err) return callback(err);

    client.ConvertSimple(args, function (err, result) {
      if (err) return callback(err);

      var resultArray = (result.Result.$value).split("&");
      var data = {
        resultCode: resultArray[0],
        resultString: resultArray[1],
        resultConvertID: resultArray[2],
      };
      return callback(null, data);
    });
  });
};

/**
 * ConvertText
 * @param {Object}   options  A object for options
 *                            {TTStext: string, TTSSpeaker: string,
 *                             volume: number, speed: number, outType: string}
 * @param {Function} callback Callback [fuction (err, data)]
 */
TTSClient.prototype.ConvertText = function (options, callback) {
  var args = {
    accountID: this.accountID,
    password: this.password,
    TTStext: options.TTStext,
    TTSSpeaker: options.TTSSpeaker,
    volume: options.volume,
    speed: options.speed,
    outType: options.outType
  };
  soap.createClient(URL, function (err, client) {
    if (err) return callback(err);

    client.ConvertText(args, function (err, result) {
      if (err) return callback(err);

      var resultArray = (result.Result.$value).split("&");
      var data = {
        resultCode: resultArray[0],
        resultString: resultArray[1],
        resultConvertID: resultArray[2],
      };
      return callback(null, data);
    });
  });
};

/**
 * ConvertAdvancedText
 * @param {Object}   options  A object for options
 *                            {TTStext: string, TTSSpeaker: string,
 *                             volume: number, speed: number, outType: string,
 *                             PitchLevel: number, PitchSign: number, PitchScale: number}
 * @param {Function} callback Callback [fuction (err, data)]
 */
TTSClient.prototype.ConvertAdvancedText = function (options, callback) {
  var args = {
    accountID: this.accountID,
    password: this.password,
    TTStext: options.TTStext,
    TTSSpeaker: options.TTSSpeaker,
    volume: options.volume,
    speed: options.speed,
    outType: options.outType,
    PitchLevel: options.PitchLevel,
    PitchSign: options.PitchSign,
    PitchScale: options.PitchScale
  };
  soap.createClient(URL, function (err, client) {
    if (err) return callback(err);

    client.ConvertAdvancedText(args, function (err, result) {
      if (err) return callback(err);

      var resultArray = (result.Result.$value).split("&");
      var data = {
        resultCode: resultArray[0],
        resultString: resultArray[1],
        resultConvertID: resultArray[2],
      };
      return callback(null, data);
    });
  });
};

/**
 * GetConvertStatus
 * @param {Number}   id       A convert ID
 * @param {Function} callback Callback [fuction (err, data)]
 */
TTSClient.prototype.GetConvertStatus = function (id, callback) {
  var args = {
    accountID: this.accountID,
    password: this.password,
    convertID: id
  };
  soap.createClient(URL, function (err, client) {
    if (err) return callback(err);

    client.GetConvertStatus(args, function (err, result) {
      if (err) return callback(err);

      var resultArray = (result.Result.$value).split("&");
      var data = {
        resultCode: resultArray[0],
        resultString: resultArray[1],
        statusCode: resultArray[2],
        status: resultArray[3],
      };
      if (data.resultCode === '0' && data.statusCode == '2') {
        data.resultUrl = resultArray[4];
      }
      return callback(null, data);
    });
  });
};

module.exports = TTSClient;
