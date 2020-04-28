# google-input-tool
Small Free library tool to transliterate words for a provided language code.

### Publishing NPM Package

  1. Create & PUsh Git Tag:
  
        git tag v1.1.2
        git push origin --tags
  
  2. Login to Npm
  
         npm login
         userename: r******
         password: ***
         email: sam***.***.*****@****.com
   
     To Verify if Logged in:
     
         npm whoami 
    
  3. Modify the tag version on package.json as below:
  
         {
           "name": "google-input-tool",
           "version": "1.1.1",
           ...
         }
         
  4. Publish the package in npm js
  
         npm publish 
         
        Will Give Following output:
        
         npm notice 
         npm notice 📦  google-input-tool@1.1.2
         npm notice === Tarball Contents === 
         npm notice 767B   package.json
         npm notice 2.3kB  index.js    
         npm notice 1.4kB  README.md   
         npm notice 16.8kB test/test.js
         npm notice === Tarball Details === 
         npm notice name:          google-input-tool                       
         npm notice version:       1.1.2                                   
         npm notice package size:  4.1 kB                                  
         npm notice unpacked size: 21.2 kB                                 
         npm notice shasum:        57e02d067884918d114d2ea9a1bdb3cbb19ee3db
         npm notice integrity:     sha512-BrDfNniAQBnB6[...]B1Lo5b05Pn71Q==
         npm notice total files:   4                                       
         npm notice 
         + google-input-tool@1.1.2

## Installation of this package
```npm install google-input-tool```

## Usage of this package

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
