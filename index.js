'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 *
 * @param sourceText            Source text to be transliterated.
 * @param inputLanguageCode     Language code, for e.g. ne-t-i0-und for Nepal.
 * @param maxResult             Max number of transliterated results.
 * @return {Promise<any>}
 */
module.exports = function(sourceText, inputLanguageCode, maxResult) {
    return new Promise(function(resolve, reject) {
        let encodedUrl = encodeURI('https://inputtools.google.com/request?text=' + sourceText + '&itc=' + inputLanguageCode + '&num=' + maxResult + '&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage');

        // Do the usual XHR stuff
        var request = new XMLHttpRequest();
        request.open("GET", encodedUrl);

        request.onreadystatechange = function () {
            if (request.response !== '') {
                if (this.readyState == 4 && this.status == 200) {
                    let json = JSON.parse(this.responseText);
                    //console.log(json[1][0][1]);

                    // Resolve the promise with the response text
                    resolve(json[1][0][1]);
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    //reject('Rejected !' + request.status);
                }
            }
        };

        request.onerror = function() {
            reject(Error("Network Error"));
        };

        request.send();
    });
}

// module.exports = function generateRandomNumber () {
//     return new Promise(function (resolve, reject) {
//         var randomNumber = Math.floor((Math.random() * 10) + 1)
//         if (randomNumber <= 5) {
//             resolve(2)
//         } else {
//             reject(randomNumber)
//         }
//     })
// }