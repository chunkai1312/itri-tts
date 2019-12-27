# itri-tts

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]

> ITRI TTS Web Service API for Node.js

## Deprecation Notice

ITRI TTS Web Service API has stopped working.

## Install

```
$ npm install --save itri-tts
```

## Usage

```js
var TTSClient = require('itri-tts')
var tts = new TTSClient(accountID, password)
```

### ConvertSimple

```js
var text = '您好，我是Bruce，感謝您使用工研院文字轉語音Web服務。'

tts.ConvertSimple(text, function (err, result) {
  if (err) throw err
  console.log(result)  // { resultCode: '0',
                       //   resultString: 'success',
                       //   resultConvertID: CONVERT_ID }
})

/* Promise Support */
tts.ConvertSimple(text)
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log(err)
  })
```

### ConvertText

```js
var options = {
  TTStext: '您好，我是Bruce，感謝您使用工研院文字轉語音Web服務。',
  TTSSpeaker: 'Bruce',  // 'Bruce', 'Theresa', 'Angela', default = Bruce
  volume: 100,          // 0 ~ 100, default = 100
  speed: 0,             // -10 ~ 10, default = 0
  outType: 'wav'        // 'wav', 'flv', default = 'wav'
}

tts.ConvertText(options, function (err, result) {
  if (err) throw err
  console.log(result)  // { resultCode: '0',
                       //   resultString: 'success',
                       //   resultConvertID: CONVERT_ID }
})

/* Promise Support */
tts.ConvertText(options)
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log(err)
  })
```

### ConvertAdvancedText

```js
var options = {
  TTStext: '您好，我是Bruce，感謝您使用工研院文字轉語音Web服務。',
  TTSSpeaker: 'Bruce',  // Bruce, Theresa, Angela, default = Bruce
  volume: 100,          // 0 ~ 100, default = 100
  speed: 0,             // -10 ~ 10, default = 0
  outType: 'wav',       // wav, flv
  PitchLevel: 0,        // -10 ~ 10, default = 0
  PitchSign: 0,         // 0, 1, 2, default = 0
  PitchScale: 5         // 0 ~ 20, default = 5
}

tts.ConvertAdvancedText(options, function (err, result) {
  if (err) throw err
  console.log(result)  // { resultCode: '0',
                       //   resultString: 'success',
                       //   resultConvertID: CONVERT_ID }
})

/* Promise Support */
tts.ConvertAdvancedText(options)
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log(err)
  })
```

### GetConvertStatus

```js
var convertID = 1234567890

tts.GetConvertStatus(convertID, function (err, result) {
  if (err) throw err
  console.log(result)  // { resultCode: '0',
                       //   resultString: 'success',
                       //   statusCode: '2',
                       //   status: 'completed',
                       //   resultUrl: AUDIO_ADDRESS }
})

/* Promise Support */
tts.GetConvertStatus(convertID)
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log(err)
  })
```

## Reference

[工研院文字轉語音Web服務](http://tts.itri.org.tw)

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[npm-image]: https://img.shields.io/npm/v/itri-tts.svg
[npm-url]: https://npmjs.org/package/itri-tts
[travis-image]: https://img.shields.io/travis/chunkai1312/itri-tts.svg
[travis-url]: https://travis-ci.org/chunkai1312/itri-tts
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/itri-tts.svg
[codecov-url]: https://codecov.io/gh/chunkai1312/itri-tts
