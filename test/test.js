'use strict';

var expect = require('chai').expect;
var googleTransliterate = require('../index');
var sinon = require('sinon');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


describe('Transliterate Test', function() {
    let request;

    beforeEach(function() {
        request = new XMLHttpRequest();
    });

    it('Amharic: Given "amharic" is entered, it should return array of transliterated amharic script.', async () => {
        //Given
        let sourceText = 'amharic';
        let inputLanguage = 'am-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['አምሃርች', 'አምሀርች', 'አምሐርች', 'አምኃርች', 'አምህአርች'];

        /**
         * Method 1
         */
        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);

        /**
         * Method 2
         */
        // return googleTransliterate(request, sourceText, inputLanguage, maxResult).then((data) => {
        //     expect(data).to.deep.equal(expectedTransliteration);
        // });
    });

    it('Arabic: Given "arabic" is entered, it should return array of transliterated arabic script.', async () => {
        //Given
        let sourceText = 'arabic';
        let inputLanguage = 'ar-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ["أرابيك", "أربيك", "أربك", "ارابيك", "ربك"];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Bengali: Given "bangla" is entered, it should return array of transliterated bengali script.', async () => {
        //Given
        let sourceText = 'bangla';
        let inputLanguage = 'bn-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['বাংলা', 'বাঙলা', 'বাঙ্লা', 'বাংলাঃ', 'বংলা'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Chinese (Hong Kong): Given "hong kong" is entered, it should return array of transliterated chinese (hong kong) script.', async () => {
        //Given
        let sourceText = 'hong kong';
        let inputLanguage = 'yue-hant-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "香港",
            "香江",
            "空曠",
            "空港",
            "空降",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Chinese (Simplified, China): Given "china" is entered, it should return array of transliterated chinese simplified script.', async () => {
        //Given
        let sourceText = 'china';
        let inputLanguage = 'zh-t-i0-pinyin';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "China",
            "吃",
            "持",
            "迟",
            "池",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    // it('Chinese (Traditional, Taiwan): Given "taiwan" is entered, it should return array of transliterated chinese traditional script.', async () => {
    //     //Given
    //     let sourceText = 'china';
    //     let inputLanguage = 'zh-hant-t-i0-und';
    //     let maxResult = 5;
    //
    //     //Expected
    //     let expectedTransliteration = [];
    //
    //     const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
    //     expect(result).to.deep.equal(expectedTransliteration);
    // });

    it('Greek: Given "argía" (in English, holiday) is entered, it should return array of transliterated greek script.', async () => {
        //Given
        let sourceText = 'argía';
        let inputLanguage = 'el-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "αργότεραíα"
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Gujarati: Given "gujarat" is entered, it should return array of transliterated gujarati script.', async () => {
        //Given
        let sourceText = 'gujarat';
        let inputLanguage = 'gu-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ગુજરાત",
            "ગૂજરાત",
            "ગુજરાતે",
            "ગુજારત",
            "ગુજારાત",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Hindi: Given "hindi" is entered, it should return array of transliterated hindi script.', async () => {
        //Given
        let sourceText = 'hindi';
        let inputLanguage = 'hi-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['हिंदी', 'हिन्दी', 'हिन्दि', 'हिँदी', 'हिंदि'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    /**
     * To fix the actual text, displaying square box because kannada text nned to be installed.
     */
    it('Kannada: Given "kannada" is entered, it should return array of transliterated kannada script.', async () => {
        //Given
        let sourceText = 'kannada';
        let inputLanguage = 'kn-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ಕನ್ನಡ",
            "ಕನ್ನದ",
            "ಕನ್ನಡಾ",
            "ಕಣ್ಣಾದ",
            "ಕನ್ನಡಂ",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Malayalam: Given "malayalam" is entered, it should return array of transliterated malayalam script.', async () => {
        //Given
        let sourceText = 'malayalam';
        let inputLanguage = 'ml-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['മലയാളം', 'മലയാലം', 'മലയാളത്തെ', 'മലയാളവും', 'മാലയാളം'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Marathi: Given "marathi" is entered, it should return array of transliterated marathi script.', async () => {
        //Given
        let sourceText = 'marathi';
        let inputLanguage = 'mr-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['मराठी', 'मराठि', 'मरठी', 'मराठीं', 'माराठी'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Nepali: Given "hami" is entered, it should return array of transliterated nepali script.', async () => {
        //Given
        let sourceText = 'hami';
        let inputLanguage = 'ne-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['हामी', 'हमी', 'हामि', 'हमि', 'ह्मी'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Oriya: Given "india" is entered, it should return array of transliterated Oriya script.', async () => {
        //Given
        let sourceText = 'india';
        let inputLanguage = 'or-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ଇଣ୍ଡିଆ",
            "ଇଣ୍ଡିଅ",
            "ଇଂଡିଆ",
            "ବିଅ",
            "ଇନ୍ଦିଆ",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Persian: Given "farsi" is entered, it should return array of transliterated Persian script.', async () => {
        //Given
        let sourceText = 'farsi';
        let inputLanguage = 'fa-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "فارسی",
            "فرسی",
            "فرشی",
            "ارسی",
            "فارثی",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Punjabi: Given "punjab" is entered, it should return array of transliterated Punjabi script.', async () => {
        //Given
        let sourceText = 'punjab';
        let inputLanguage = 'pa-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ਪੰਜਾਬ",
            "ਪੰਜਾਬੀ",
            "ਪੰਜਬ",
            "ਪੰਜ਼ਾਬ",
            "ਪੰਜਾਂਬ",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Russian: Given "valdamir" is entered, it should return array of transliterated Russian script.', async () => {
        //Given
        let sourceText = 'valdamir';
        let inputLanguage = 'ru-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "валдамир",
            "вальдамир",
            "валдатир",
            "валдамыр",
            "вальдамыр",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Sanskrit: Given "sanskrit" is entered, it should return array of transliterated Sanskrit script.', async () => {
        //Given
        let sourceText = 'sanskrit';
        let inputLanguage = 'sa-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "संस्कृत",
            "संस्कृत्",
            "सन्स्क्रित्",
            "संस्क्रित",
            "संसकृत",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Serbian: Given "serbia" is entered, it should return array of transliterated Serbian script.', async () => {
        //Given
        let sourceText = 'serbia';
        let inputLanguage = 'sr-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "сербиа",
            "шербиа"
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Sinhalese: Given "srilanka" is entered, it should return array of transliterated Sinhalese script.', async () => {
        //Given
        let sourceText = 'srilanka';
        let inputLanguage = 'si-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ශ්‍රීලංකා",
            "ශ්‍රිලංකා",
            "ශ්‍රිලංක",
            "ස්රිලංකා",
            "සරිලංකා"
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Tamil: Given "tamil" is entered, it should return array of transliterated tamil script.', async () => {
        //Given
        let sourceText = 'tamil';
        let inputLanguage = 'ta-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = ['தமிழ்', 'டமில்', 'தமில்', 'தமிழ', 'த'];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    /**
     * To fix the actual text, displaying square box because kannada text nned to be installed.
     */
    it('Telugu: Given "telugu" is entered, it should return array of transliterated telugu script.', async () => {
        //Given
        let sourceText = 'telugu';
        let inputLanguage = 'te-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "తెలుగు",
            "తెలుఁగు",
            "తెలుగూ",
            "తెలుంగు",
            "టెలుగు",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Thai: Given "thailand" is entered, it should return array of transliterated telugu script.', async () => {
        //Given
        let sourceText = 'thailand';
        let inputLanguage = 'th-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ไทยแลนด์",
            "ไทย",
            "ถ่าย",
            "ท้าย",
            "ไท",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Tigrinya: Given "eritrea" is entered, it should return array of transliterated tigrinya script.', async () => {
        //Given
        let sourceText = 'eritrea';
        let inputLanguage = 'ti-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "ኤርትረአ",
            "አርትረአ",
            "ኤርጥረአ",
            "ኤሪትረአ",
            "አርጥረአ",
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });

    it('Urdu: Given "pakistan" is entered, it should return array of transliterated Urdu script.', async () => {
        //Given
        let sourceText = 'pakistan';
        let inputLanguage = 'ur-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [
            "پاکستان",
            "پکستان",
            "پاکستاں",
            "پاکیستان",
            "پاکستن"
        ];

        const result = await googleTransliterate(request, sourceText, inputLanguage, maxResult);
        expect(result).to.deep.equal(expectedTransliteration);
    });
});


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//
// var request = new XMLHttpRequest();
// request.open("GET", "https://inputtools.google.com/request?text=hamie&itc=ne-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage");
//
// request.onreadystatechange = function () {
//     if (request.response !== '') {
//         if (this.readyState == 4 && this.status == 200) {
//             let json = JSON.parse(this.responseText);
//             console.log(json[1][0][1]);
//
//             // Resolve the promise with the response text
//             resolve(json[1][0][1]);
//         } else {
//             // Otherwise reject with the status text
//             // which will hopefully be a meaningful error
//             //reject('Rejected !' + request.status);
//         }
//     }
// };
//
// request.onerror = function() {
//     reject(Error("Network Error"));
// };
//
// request.send();