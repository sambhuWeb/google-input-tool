'use strict';

var expect = require('chai').expect;
var googleTransliterate = require('../index');
var sinon = require('sinon');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


describe('#googleTransliterate', function() {
    let request;

    beforeEach(function() {
        request = new XMLHttpRequest();
        
    });    

    it('Given "hami" is entered, it should return transliterate result as an array.', async () => {
        //Given
        let sourceText = 'hami';
        let inputLanguage = 'ne-t-i0-und';
        let maxResult = 5;

        //Expected
        let expectedTransliteration = [ 'हामी', 'हमी', 'हामि', 'हमि', 'ह्मी'];

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