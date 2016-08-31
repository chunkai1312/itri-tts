# itri-tts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> ITRI TTS Web Service API for Node.js

## Install

```sh
$ npm install --save itri-tts
```

## Usage

```js
var TTSClient = require('itri-tts');
var tts = new TTSClient(your_accountID, your_password);
```

### ConvertSimple

```js
tts.ConvertSimple(TTStext, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result);  // { resultCode: '0',
                        //   resultString: 'success',
                        //   resultConvertID: CONVERT_ID }
});
```

### ConvertText

```js
var options = {
  TTStext: string,
  TTSSpeaker: string, // Bruce, Theresa, Angela, default = Bruce
  volume: number,     // 0 ~ 100, default = 100
  speed: number,      // -10 ~ 10, default = 0
  outType: string     // wav, flv
};
tts.ConvertText(options, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result);  // { resultCode: '0',
                        //   resultString: 'success',
                        //   resultConvertID: CONVERT_ID }
});
```

### ConvertAdvancedText

```js
var options = {
  TTStext: string,
  TTSSpeaker: string, // Bruce, Theresa, Angela, default = Bruce
  volume: number,     // 0 ~ 100, default = 100
  speed: number,      // -10 ~ 10, default = 0
  outType: string     // wav, flv
  PitchLevel: number, // -10 ~ 10, default = 0
  PitchSign: number,  // 0, 1, 2, default = 0
  PitchScale: number  // 0 ~ 20, default = 5
};
tts.ConvertAdvancedText(options, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result);  // { resultCode: '0',
                        //   resultString: 'success', 
                        //   resultConvertID: CONVERT_ID }
});
```

### GetConvertStatus

```js
tts.GetConvertStatus(convertID, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result);  // { resultCode: '0',
                        //   resultString: 'success', 
                        //   statusCode: '2', 
                        //   status: 'completed',
                        //   resultUrl: AUDIO_ADDRESS }
});
```

## Reference

[工研院文字轉語音Web服務](http://tts.itri.org.tw)

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[npm-image]: https://badge.fury.io/js/itri-tts.svg
[npm-url]: https://npmjs.org/package/itri-tts
[travis-image]: https://travis-ci.org/chunkai1312/itri-tts.svg?branch=master
[travis-url]: https://travis-ci.org/chunkai1312/itri-tts