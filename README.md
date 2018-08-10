# google-input-tool
Small Free library tool to transliterate words for a provided language code.

## Installation
```npm install google-input-tool```

## Usuage

```
let googleTransliterate = require('google-input-tool');

let sourceText = 'hami';
let inputLanguage = 'ne-t-i0-und';
let maxResult = 8;
let request = new XMLHttpRequest();

googleTransliterate(request, sourceText, inputLanguage, maxResult)
.then(function(response) {
    console.log('Transliterated Text: ', response);
});

Output:
Transliterated Text: हामी
```

## Supported Languages

|  Language | Code  |
|---|---|
| Amharic | am-t-i0-und |
| Arabic | ar-t-i0-und |
| Bengali | bn-t-i0-und |
| Chinese (Hong Kong) | yue-hant-t-i0-und |
| Chinese (Simplified, China) | zh-t-i0-pinyin |
| Chinese (Traditional, Taiwan) | zh-hant-t-i0-und |
| Greek | el-t-i0-und |
| Gujarati | gu-t-i0-und |
| Hindi | hi-t-i0-und |
| Kannada | kn-t-i0-und |
| Malayalam | ml-t-i0-und |
| Marathi | mr-t-i0-und |
| Nepali | ne-t-i0-und |
| Oriya | or-t-i0-und |
| Persian | fa-t-i0-und |
| Punjabi | pu-t-i0-und |
| Russian | ru-t-i0-und |
| Sanskrit | sa-t-i0-und |
| Serbian | sr-t-i0-und |
| Sinhalese | si-t-i0-und |
| Tamil | ta-t-i0-und |
| Telugu | te-t-i0-und |
| Thai | th-t-i0-und |
| Tigrinya | ti-t-i0-und |
| Urdu | ur-t-i0-und |

## Repository ##
https://github.com/sambhuWeb/google-input-tool