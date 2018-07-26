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

googleTransliterate(sourceText, inputLanguage, maxResult)
.then(function(response) {
    console.log('Transliterated Text: ', response);
});

Output:
Transliterated Text: हामी
```

## Supported Languages
