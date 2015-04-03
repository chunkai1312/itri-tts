# itri-tts
ITRI TTS Web Service API for Node.js

## Installation
    npm install itri-tts

## Documentation
[ITRI TTS Web Service API](http://tts.itri.org.tw/development/web_service_api.php)

## Usage
[Create Account](http://tts.itri.org.tw/)

    var TTSClient = require('itri-tts');
    var tts = new TTSClient(your_accountID, your_password);
    
### ConvertSimple
    tts.ConvertSimple(TTStext, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });    

### ConvertText
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

### ConvertAdvancedText
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
    
### GetConvertStatus
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
    
## License
Released under the [MIT License](http://opensource.org/licenses/MIT).
